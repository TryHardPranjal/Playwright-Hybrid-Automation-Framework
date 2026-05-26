import { test } from "../../fixtures/baseFixture.js";

test("@e2e User Should Complete Checkout Flow", async ({
  page,
  productService,
  cartService,
}) => {
  await page.goto("/");

  await productService.searchAndOpenProduct("Combination Pliers");

  await cartService.addAndVerifyProduct("Combination Pliers");

  await cartService.completeCheckout();
});
