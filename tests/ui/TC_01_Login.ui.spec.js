import { test } from "../../fixtures/baseFixture.js";
import { ENV } from "../../config/env.js";

test("@smoke User Login", async ({ loginPage }) => {

  await loginPage.goto();

  await loginPage.login(
    ENV.practiceTesting.email,
    ENV.practiceTesting.password
  );

  await loginPage.verifyLogin();

});