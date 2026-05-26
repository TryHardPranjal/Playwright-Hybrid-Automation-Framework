import { test } from "../../fixtures/baseFixture.js";
test("@regression User Should Remove Product From Cart", async ({
  page,
  productService,
  cartService,
}) => {
  await page.goto("/");

  await productService.searchAndOpenProduct("Combination Pliers");
  await cartService.addAndVerifyProduct("Combination Pliers");
  await cartService.removeAndVerifyProduct("Combination Pliers");
});
