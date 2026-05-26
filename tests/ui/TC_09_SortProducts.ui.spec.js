import { test, expect } from "../../fixtures/baseFixture.js";

test("@regression User Should Sort Products A-Z", async ({
  page,
  productService,
}) => {
    
  await page.goto("/");

  const products = await productService.sortAndGetProducts("name,asc");

  const sortedProducts = [...products].sort();

  expect(products).toEqual(sortedProducts);

});
