import { expect } from "@playwright/test";

const selectors = {
  login: {
    emailInput: '[data-test="email"]',

    passwordInput: '[data-test="password"]',

    loginButton: '[data-test="login-submit"]',

    accountMenu: '[data-test="nav-menu"]',

    loginError: '[data-test="login-error"]',
  },
};

class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("/auth/login");
  }

  async login(email, password) {
    await this.page.locator(selectors.login.emailInput).fill(email);

    await this.page.locator(selectors.login.passwordInput).fill(password);

    await this.page.locator(selectors.login.loginButton).click();
  }

  async verifyLogin() {
  await expect(
    this.page.getByRole("menuitem", { name: "Sign in" })
  ).toBeHidden();

  await expect.poll(async () => {
    return await this.page.evaluate(() => localStorage.getItem("auth-token"));
  }).not.toBeNull();
}

  async verifyLoginError() {
    await expect(this.page.locator(selectors.login.loginError)).toBeVisible();
  }
}

export default LoginPage;
