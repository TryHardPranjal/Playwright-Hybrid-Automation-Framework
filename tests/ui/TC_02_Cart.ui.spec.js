import { test } from "../../fixtures/baseFixture.js";

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
