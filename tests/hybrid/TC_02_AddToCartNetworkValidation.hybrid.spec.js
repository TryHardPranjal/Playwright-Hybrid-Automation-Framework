import { test, expect } from "../../fixtures/baseFixture.js";

import Logger from "../../utils/Logger.js";

test.describe("Hybrid UI + API Validation", () => {
  test("@e2e Add Product To Cart And Validate API", async ({
    page,
    productService,
    cartPage,
  }) => {
    const productName = "Bolt Cutters";

    await page.goto("/");

    await productService.searchAndOpenProduct(productName);

    const addToCartPromise = page.waitForResponse(
      (response) =>
        response.url().includes("/carts/") &&
        response.request().method() === "POST",
    );

    await cartPage.addProductToCart();

    const apiResponse = await addToCartPromise;

    expect(apiResponse.status()).toBe(200);

    expect(apiResponse.headers()["content-type"]).toContain("application/json");

    const requestPayload = apiResponse.request().postDataJSON();

    Logger.info("Request Payload", requestPayload);

    expect(requestPayload.quantity).toBe(1);

    const expectedProductId = await productService.getCurrentProductId();

    expect(requestPayload.product_id).toBe(expectedProductId);

    const responseBody = await apiResponse.json();

    Logger.info("Response", responseBody);

    expect(responseBody.result).toBe("item added or updated");

    await cartPage.openCart();

    await cartPage.verifyProductInCart(productName);
  });
});
