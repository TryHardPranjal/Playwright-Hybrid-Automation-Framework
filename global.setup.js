import { chromium, expect } from "@playwright/test";
import { ENV } from "./config/env.js";
import Logger from "./utils/Logger.js";

async function globalSetup() {
  const browser = await chromium.launch({
    headless: true,
  });

  const page = await browser.newPage();

  const baseUrl = process.env.WEB_URL;

  Logger.info("WEB_URL", baseUrl);

  if (!baseUrl) {
    throw new Error("WEB_URL is undefined");
  }

  await page.goto(
    `${baseUrl}/auth/login`,

    {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    },
  );

  Logger.info("Current URL", page.url());

  await page.screenshot({
    path: "setup-page.png",
  });

  await page.waitForSelector(
    '[data-test="email"]',

    {
      state: "visible",
      timeout: 60000,
    },
  );

  await page.locator('[data-test="email"]').fill(ENV.practiceTesting.email);

  await page
    .locator('[data-test="password"]')
    .fill(ENV.practiceTesting.password);

  await page.locator('[data-test="login-submit"]').click();

  await expect(page.locator('[data-test="nav-menu"]')).toBeVisible({
    timeout: 60000,
  });

  await page.context().storageState({
    path: "./.auth/user.json",
  });

  Logger.info("Auth state saved successfully");

  await browser.close();
}

export default globalSetup;
