import Logger from "../utils/Logger.js";

class ProductService {
  constructor(productsPage) {
    this.productsPage = productsPage;
  }

  async searchAndOpenProduct(productName) {
    await this.productsPage.searchProduct(productName);

    await this.productsPage.verifyResultsLoaded();

    const products = await this.productsPage.getAllProductNames();

    Logger.info("Available Products", products);

    await this.productsPage.openProduct(productName);
  }

  async filterProducts(option) {
    await this.productsPage.sortProducts(option);

    await this.productsPage.verifyResultsLoaded();
  }

  async sortAndGetProducts(sortType) {
    await this.productsPage.sortProducts(sortType);

    return await this.productsPage.getAllProductNames();
  }

  async searchInvalidProduct(productName) {
    await this.productsPage.searchProduct(productName);

    await this.productsPage.verifyNoResultsFound();
  }

  async getCurrentProductId() {
    const url = this.productsPage.page.url();

    return url.split("/product/")[1];
  }
}

export default ProductService;
