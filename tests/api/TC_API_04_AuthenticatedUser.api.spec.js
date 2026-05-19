import { test, expect } from '@playwright/test';
import APIClient from '../../api-utils/apiClient.js';
import AuthHelper from '../../api-utils/authHelper.js';


test.describe('Authenticated User API', () => {

  test('@regression Access Protected API', async ({ request }) => {

    const apiClient = new APIClient(request);
    const token = await AuthHelper.getToken(request);
    expect(token).toBeTruthy();
    const userResponse = await apiClient.get(
      '/api/users/2',
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    expect(userResponse.status()).toBe(200);
    expect(userResponse.ok()).toBeTruthy();
    const responseBody = await userResponse.json();
    expect(responseBody.data.id).toBe(2);
    expect(responseBody.data).toHaveProperty('email');
    expect(responseBody.data).toHaveProperty('first_name');
    console.log(responseBody);

  });

});