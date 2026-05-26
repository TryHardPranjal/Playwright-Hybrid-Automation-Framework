import { test } from "../../fixtures/baseFixture.js";

test("@negative Invalid Login Validation", async ({ authService }) => {

  await authService.invalidLogin("invalid@test.com", "wrongpassword");
  
});
