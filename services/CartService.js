class CartService {
  constructor(cartPage) {
    this.cartPage = cartPage;
  }

  async addAndVerifyProduct(productName) {
    await this.cartPage.addProductToCart();
    await this.cartPage.openCart();
    await this.cartPage.verifyProductInCart(productName);
  }

  async completeCheckout() {
    await this.cartPage.proceedCheckout();
    await this.cartPage.continueCheckout();
  }

  async removeAndVerifyProduct(productName) {

    await this.cartPage.removeProduct(productName);
    await this.cartPage.verifyDeleteToast();

  }
}

export default CartService;
