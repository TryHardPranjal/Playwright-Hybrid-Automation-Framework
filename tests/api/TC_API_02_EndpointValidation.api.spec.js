import { test, expect } from '@playwright/test';

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

        console.log('\nEmpty Payload Response:');
        console.log(emptyPayloadBody);
        expect(emptyPayloadBody.error).toBe('Missing email or username');

        expect(
            emptyPayloadResponse.headers()['content-type']).toContain('application/json');

    });

    test('@negative Null Payload Login Validation', async ({ request }) => {

        const nullPayload = {
            email: null,
            password: null
        };

        console.log('\nNull Payload:');
        console.log(nullPayload);

        const nullPayloadResponse = await request.post(
            '/api/login',
            {
                data: nullPayload
            }
        );

        expect(nullPayloadResponse.status()).toBe(400);
        expect(nullPayloadResponse.ok()).toBeFalsy();
        const nullPayloadBody = await nullPayloadResponse.json();

        console.log('\nNull Payload Response:');
        console.log(nullPayloadBody);
        expect(nullPayloadBody.error).toBeTruthy();

        expect(
            nullPayloadResponse.headers()['content-type']).toContain('application/json');

    });

    test('@negative Invalid Email Login Validation', async ({ request }) => {

        const invalidEmailPayload = {

            email: 'invalid@email.com',
            password: 'cityslicka'

        };

        console.log('\nInvalid Email Payload:');
        console.log(invalidEmailPayload);

        const invalidEmailResponse = await request.post(
            '/api/login',
            {
                data: invalidEmailPayload
            }
        );

        expect(invalidEmailResponse.status()).toBe(400);
        expect(invalidEmailResponse.ok()).toBeFalsy();
        const invalidEmailBody = await invalidEmailResponse.json();

        console.log('\nInvalid Email Response:');
        console.log(invalidEmailBody);

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

    console.log('\nMissing Password Payload:');
    console.log(missingPasswordPayload);

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

    console.log('\nMissing Password Response:');
    console.log(missingPasswordBody);

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

        console.log('\nValid Login Payload:');
        console.log(validLoginPayload);

        const validLoginResponse = await request.post(
            '/api/login',
            {
                data: validLoginPayload
            }
        );

        expect(validLoginResponse.status()).toBe(200);
        expect(validLoginResponse.ok()).toBeTruthy();
        const validResponseBody = await validLoginResponse.json();

        console.log('\nValid Login Response:');
        console.log(validResponseBody);

        expect(validResponseBody).toHaveProperty('token');
        expect(validResponseBody.token).toBeTruthy();

        expect(
            validLoginResponse.headers()['content-type']
        ).toContain('application/json');

    });

});