import { chromium, expect } from "@playwright/test";

import { ENV } from "./config/env.js";

import Logger from "./utils/Logger.js";

async function globalSetup() {
  const browser = await chromium.launch({
    headless: true,
  });

  const page = await browser.newPage();

  await page.goto(
    `${process.env.WEB_URL}/auth/login`,

    {
      waitUntil: "networkidle",
    },
  );

  await page.locator('[data-test="email"]').waitFor();

  await page.locator('[data-test="email"]').fill(ENV.practiceTesting.email);

  await page
    .locator('[data-test="password"]')
    .fill(ENV.practiceTesting.password);

  await page.locator('[data-test="login-submit"]').click();

  await expect(page.locator('[data-test="nav-menu"]')).toBeVisible({
    timeout: 30000,
  });

  await page.context().storageState({
    path: "./.auth/user.json",
  });

  Logger.info("Auth state saved successfully");

  await browser.close();
}

export default globalSetup;
