import { test } from "../../fixtures/baseFixture.js";
import Logger from "../../utils/Logger.js";
test.beforeEach(async ({ page }) => {
  await page.goto("/");

  const token = await page.evaluate(() => localStorage.getItem("auth-token"));

  Logger.info("Auth token exists", !!token);
});

test.describe("Cart Feature", () => {
  test("@regression User Should Be Able To Add Product To Cart", async ({
    page,
    productService,
    cartService,
  }) => {
    await page.goto("/");

    await productService.searchAndOpenProduct("Combination Pliers");
    await cartService.addAndVerifyProduct("Combination Pliers");
  });
});
