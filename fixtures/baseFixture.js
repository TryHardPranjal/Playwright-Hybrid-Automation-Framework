import { test as base } from "@playwright/test";

import LoginPage from "../pages/LoginPage.js";
import ProductsPage from "../pages/ProductsPage.js";
import CartPage from "../pages/CartPage.js";

import ProductService from "../services/ProductService.js";
import CartService from "../services/CartService.js";
import AuthService from "../services/AuthService.js";

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },

  productService: async ({ productsPage }, use) => {
    await use(new ProductService(productsPage));
  },

  cartService: async ({ cartPage }, use) => {
    await use(new CartService(cartPage));
  },

  authService: async ({ loginPage }, use) => {
    await use(new AuthService(loginPage));
  },
});

export const expect = test.expect;
