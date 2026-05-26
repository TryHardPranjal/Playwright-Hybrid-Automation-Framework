import { test, expect } from "../../fixtures/baseFixture.js";

test("@regression User Should Filter Products", async ({
  page,
  productService,
  productsPage,
}) => {
  await page.goto("/");

  await productService.filterProducts("name,asc");

  const count = await productsPage.getVisibleProductCount();

  expect(count).toBeGreaterThan(0);
});
