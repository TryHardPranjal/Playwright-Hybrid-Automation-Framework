import { test } from "../../fixtures/baseFixture.js";

test.describe("Hybrid API + UI Flow", () => {
  test("@e2e Validate Stored Login State", async ({ page, loginPage }) => {
    await page.goto("/");

    await loginPage.verifyLogin();
  });
});
