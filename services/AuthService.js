import { ENV } from "../config/env.js";

class AuthService {
  constructor(loginPage) {
    this.loginPage = loginPage;
  }

  async loginWithDefaultUser() {
    await this.loginPage.goto();

    await this.loginPage.login(
      ENV.practiceTesting.email,

      ENV.practiceTesting.password,
    );

    await this.loginPage.verifyLogin();
  }

  async invalidLogin(email, password) {
    await this.loginPage.goto();

    await this.loginPage.login(email, password);

    await this.loginPage.verifyLoginError();
  }
}

export default AuthService;
