import { expect } from "@playwright/test";

const selectors = {
  search: {
    box: '[data-test="search-query"]',
    resultCount: '[data-test="search-result-count"]',
    noResults: '[data-test="no-results"]',
    sortDropdown: '[data-test="sort"]',
  },

  product: {
    card: 'a.card[data-test^="product-"]',
    name: '[data-test="product-name"]',
    price: '[data-test="product-price"]',
    compareButton: '[data-test="compare-btn"]',
  },
};

class ProductsPage {
  constructor(page) {
    this.page = page;
  }

  async searchProduct(productName) {
    await this.page.locator(selectors.search.box).fill(productName);

    await this.page.keyboard.press("Enter");
  }

  async verifyResultsLoaded() {
    await expect(
      this.page.locator(selectors.product.card).first(),
    ).toBeVisible();
  }

  async getProductCount() {
    return await this.page.locator(selectors.product.card).count();
  }

  async getVisibleProductCount() {
    await this.verifyResultsLoaded();

    return await this.page.locator(selectors.product.name).count();
  }

  async getAllProductNames() {
    const products = await this.page
      .locator(selectors.product.name)
      .allTextContents();

    return products.map((product) => product.trim());
  }

  async getProductCard(productName) {
    return this.page
      .locator(selectors.product.card)
      .filter({
        hasText: productName,
      })
      .first();
  }

  async openProduct(productName) {
    const product = await this.getProductCard(productName);

    await expect(product).toBeVisible();

    await product.scrollIntoViewIfNeeded();

    await product.click();
  }

  async getProductPrice(productName) {
    const product = await this.getProductCard(productName);

    return await product.locator(selectors.product.price).textContent();
  }

  async clickCompare(productName) {
    const product = await this.getProductCard(productName);

    await product.locator(selectors.product.compareButton).click();
  }

  async sortProducts(sortType) {
    await this.page
      .locator(selectors.search.sortDropdown)
      .selectOption(sortType);
  }

  async verifyProductDetails(productName) {
    await expect(this.page.locator(selectors.product.name)).toContainText(
      productName,
    );
  }

  async verifyNoResultsFound() {
    await expect(this.page.locator(selectors.search.noResults)).toBeVisible();
  }
}

export default ProductsPage;
