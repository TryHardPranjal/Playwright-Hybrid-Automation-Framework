import { test, expect } from "@playwright/test";
import APIClient from "../../api-utils/apiClient.js";
import userPayload from "../../payloads/mockApiUserPayload.json" assert { type: "json" };
import { ENV } from "../../config/env.js";
import Logger from "../../utils/Logger.js";
import RandomData from "../../utils/RandomData.js";

test.describe("MockAPI CRUD Flow", () => {
  test("@e2e Full CRUD User Flow", async ({ request }) => {
    const apiClient = new APIClient(request);
    const baseURL = ENV.mockapi.baseURL;
    const dynamicPayload = {
      ...userPayload,

      name: RandomData.getRandomName(),

      email: RandomData.getRandomEmail(),
    };

    Logger.info("\nCreate User Payload:", dynamicPayload);

    // Create user

    const createResponse = await apiClient.post(
      `${baseURL}/users`,
      dynamicPayload,
    );

    expect(createResponse.status()).toBe(201);
    expect(createResponse.ok()).toBeTruthy();
    const createBody = await createResponse.json();
    Logger.info("\nCreated User Response:", createBody);

    expect(createBody.name).toBe(dynamicPayload.name);
    expect(createBody.job).toBe(dynamicPayload.job);
    expect(createBody).toHaveProperty("id");
    const userId = createBody.id;

    // Get created user

    const getUserResponse = await apiClient.get(`${baseURL}/users/${userId}`);

    expect(getUserResponse.status()).toBe(200);
    expect(getUserResponse.ok()).toBeTruthy();
    const getUserBody = await getUserResponse.json();
    Logger.info("\nFetched User Response:", getUserBody);

    expect(getUserBody.name).toBe(dynamicPayload.name);
    expect(getUserBody.job).toBe(dynamicPayload.job);

    // Update user

    const updatedPayload = {
      ...dynamicPayload,
      job: "Senior QA Engineer",
    };

    Logger.info("\nUpdated Payload:", updatedPayload);

    const updateResponse = await apiClient.put(
      `${baseURL}/users/${userId}`,
      updatedPayload,
    );

    expect(updateResponse.status()).toBe(200);
    expect(updateResponse.ok()).toBeTruthy();
    const updateBody = await updateResponse.json();
    Logger.info("\nUpdated User Response:", updateBody);

    expect(updateBody.job).toBe("Senior QA Engineer");

    // Delete user

    const deleteResponse = await apiClient.delete(`${baseURL}/users/${userId}`);

    expect(deleteResponse.status()).toBe(200);
    Logger.info("\nUser Deleted Successfully");

    // Validate deleted user

    const deletedUserResponse = await apiClient.get(
      `${baseURL}/users/${userId}`,
    );

    expect(deletedUserResponse.status()).toBe(404);
    Logger.info("\nDeleted User Validation Passed");
  });
});
