import { test } from "../../fixtures/baseFixture.js";

test("@negative User Should See No Results For Invalid Product", async ({
  page,
  productService,
}) => {
  await page.goto("/");

  await productService.searchInvalidProduct("RandomProductXYZ123");
});
