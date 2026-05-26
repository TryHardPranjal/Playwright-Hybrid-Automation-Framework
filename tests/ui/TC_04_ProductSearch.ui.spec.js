import { test, expect } from "../../fixtures/baseFixture.js";

test("@smoke User Should Search Product", async ({ page, productsPage }) => {
  await page.goto("/");

  await productsPage.searchProduct("Pliers");

  await productsPage.verifyResultsLoaded();

  const count = await productsPage.getVisibleProductCount();

  expect(count).toBeGreaterThan(0);
});
