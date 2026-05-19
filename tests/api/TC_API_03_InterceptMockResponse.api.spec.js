import { test, expect } from '@playwright/test';

test.describe('API Mocking', () => {

  test('@regression Mock Fruit API Response', async ({ page }) => {

    await page.route('*/**/api/v1/fruits', async route => {
      const mockedResponse = [
        {
          name: 'Pranjal',
          id: 100
        }
      ];

      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(mockedResponse)
      });
    });

    await page.goto('https://demo.playwright.dev/api-mocking');
    await expect(page.getByText('Pranjal',{ exact: true })).toBeVisible();
  });
});