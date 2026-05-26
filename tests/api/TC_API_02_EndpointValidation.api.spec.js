import { test, expect } from '@playwright/test';
import Logger from '../../utils/Logger.js';

test.describe('Valid And Invalid Response Testing', () => {

    // More negative scenarios can be added like missing email and invalid password 
    test('@negative Empty Payload Login Validation', async ({ request }) => {

        // const emptyPayload = {};
        // console.log('\nEmpty Payload:');
        // console.log(emptyPayload);

        const emptyPayloadResponse = await request.post(
            '/api/login',
            {
                }
        );

        expect(emptyPayloadResponse.status()).toBe(400);
        expect(emptyPayloadResponse.ok()).toBeFalsy();
        const emptyPayloadBody = await emptyPayloadResponse.json();

        Logger.info('\nEmpty Payload Response:', emptyPayloadBody);
        expect(emptyPayloadBody.error).toBe('Missing email or username');

        expect(
            emptyPayloadResponse.headers()['content-type']).toContain('application/json');

    });

    test('@negative Null Payload Login Validation', async ({ request }) => {

        const nullPayload = {
            email: null,
            password: null
        };

        Logger.info('\nNull Payload:', nullPayload);

        const nullPayloadResponse = await request.post(
            '/api/login',
            {
                data: nullPayload
            }
        );

        expect(nullPayloadResponse.status()).toBe(400);
        expect(nullPayloadResponse.ok()).toBeFalsy();
        const nullPayloadBody = await nullPayloadResponse.json();

        Logger.info('\nNull Payload Response:', nullPayloadBody);
        expect(nullPayloadBody.error).toBeTruthy();

        expect(
            nullPayloadResponse.headers()['content-type']).toContain('application/json');

    });

    test('@negative Invalid Email Login Validation', async ({ request }) => {

        const invalidEmailPayload = {

            email: 'invalid@email.com',
            password: 'cityslicka'

        };

        Logger.info('\nInvalid Email Payload:', invalidEmailPayload);

        const invalidEmailResponse = await request.post(
            '/api/login',
            {
                data: invalidEmailPayload
            }
        );

        expect(invalidEmailResponse.status()).toBe(400);
        expect(invalidEmailResponse.ok()).toBeFalsy();
        const invalidEmailBody = await invalidEmailResponse.json();

        Logger.info('\nInvalid Email Response:', invalidEmailBody);

        expect(invalidEmailBody.error).toBeTruthy();
        expect(
            invalidEmailResponse.headers()['content-type']
        ).toContain('application/json');

    });

    test('@negative Missing Password Login Validation',async ({ request }) => {

    const missingPasswordPayload = {
      email:
        'eve.holt@reqres.in'
    };

    Logger.info('\nMissing Password Payload:', missingPasswordPayload);

    const missingPasswordResponse =
      await request.post(
        '/api/login',
        {
          data:
            missingPasswordPayload
        }
      );

    expect(missingPasswordResponse.status()).toBe(400);
    expect(missingPasswordResponse.ok()).toBeFalsy();
    const missingPasswordBody =await missingPasswordResponse.json();

    Logger.info('\nMissing Password Response:', missingPasswordBody);

    expect(missingPasswordBody.error).toBeTruthy();
    expect(missingPasswordBody.error).toBe('Missing password');
    expect(missingPasswordResponse.headers()['content-type']).toContain('application/json');
  }
);

    test('@smoke Valid Login Response Validation', async ({ request }) => {

        const validLoginPayload = {
            email: 'eve.holt@reqres.in',
            password: 'cityslicka'
        };

        Logger.info('\nValid Login Payload:', validLoginPayload);

        const validLoginResponse = await request.post(
            '/api/login',
            {
                data: validLoginPayload
            }
        );

        expect(validLoginResponse.status()).toBe(200);
        expect(validLoginResponse.ok()).toBeTruthy();
        const validResponseBody = await validLoginResponse.json();

        Logger.info('\nValid Login Response:', validResponseBody);

        expect(validResponseBody).toHaveProperty('token');
        expect(validResponseBody.token).toBeTruthy();

        expect(
            validLoginResponse.headers()['content-type']
        ).toContain('application/json');

    });

});