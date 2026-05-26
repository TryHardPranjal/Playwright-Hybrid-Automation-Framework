import { expect } from "@playwright/test";

const selectors = {
  cart: {
    addButton: '[data-test="add-to-cart"]',
    openButton: '[data-test="nav-cart"]',
    productName: '[data-test="product-title"]',
    checkoutButton: '[data-test="proceed-1"]',
    continueButton: '[data-test="proceed-2"]',
    emptyCartMessage: '[data-test="no-rows-message"]',
    deleteToast: '[role="alert"]',
    removeButton: "a.btn.btn-danger",
    productRow: "tr",
  },
};

class CartPage {
  constructor(page) {
    this.page = page;
  }

  async addProductToCart() {
    await this.page.locator(selectors.cart.addButton).click();
  }

  async openCart() {
    await this.page.locator(selectors.cart.openButton).click();
  }

  async verifyProductInCart(productName) {
    await expect(this.page.locator(selectors.cart.productName)).toContainText(
      productName,
    );
  }

  async proceedCheckout() {
    await this.page.locator(selectors.cart.checkoutButton).click();
  }

  async continueCheckout() {
    await this.page.locator(selectors.cart.continueButton).click();
  }

  async removeProduct(productName) {
    const productRow = this.page.locator(selectors.cart.productRow).filter({
      has: this.page.locator(
        selectors.cart.productName,

        {
          hasText: productName,
        },
      ),
    });

    await productRow.locator(selectors.cart.removeButton).click();
  }

  async verifyCartEmpty() {
    await expect(
      this.page.locator(selectors.cart.emptyCartMessage),
    ).toContainText("There are no items in your cart.");
  }

  async getCartItemCount() {
    return await this.page.locator(selectors.cart.productName).count();
  }

  async verifyDeleteToast() {
    await expect(
      this.page.locator(selectors.cart.deleteToast).filter({
        hasText: "Product deleted.",
      }),
    ).toBeVisible();
  }
}

export default CartPage;
