import { test } from "../../fixtures/baseFixture.js";
import Logger from "../../utils/Logger.js";
test.beforeEach(async ({ page }) => {
  await page.goto("/");

  const token = await page.evaluate(() => localStorage.getItem("auth-token"));

  Logger.info("Auth token exists", !!token);
});

test.describe("Hybrid API + UI Flow", () => {
  test("@e2e Validate Stored Login State", async ({
    page,
    authService,
    loginPage,
  }) => {
    await page.goto("/");

    const signInVisible = await page
      .locator('[data-test="nav-sign-in"]')
      .isVisible()
      .catch(() => false);

    if (signInVisible) {
      await authService.login();
    }

    await loginPage.verifyLogin();
  });
});
