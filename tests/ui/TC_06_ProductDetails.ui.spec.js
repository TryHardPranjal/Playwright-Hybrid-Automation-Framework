import { test } from "../../fixtures/baseFixture.js";

test("@regression User Should View Product Details", async ({
  page,
  productService,
  productsPage,
}) => {
  await page.goto("/");

  await productService.searchAndOpenProduct("Combination Pliers");

  await productsPage.verifyProductDetails("Combination Pliers");
});
