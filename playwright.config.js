// @ts-check

import "dotenv/config";
import { defineConfig, devices } from "@playwright/test";

import { ENV } from "./config/env.js";
import "./config/loadEnv.js";
storageState: "./.auth/user.json"

export default defineConfig({
  globalSetup: "./global.setup.js",

  testDir: "./tests",

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 2 : undefined,

  timeout: 90000,

  reporter: [
    ["list"],

    [
      "html",
      {
        open: "never",
      },
    ],

    ["allure-playwright"],
  ],

  use: {
    headless: process.env.CI ? true : true,

    viewport: {
      width: 1280,
      height: 720,
    },

    actionTimeout: 30000,

    navigationTimeout: 30000,

    trace: "on-first-retry",

    screenshot: "only-on-failure",

    video: "retain-on-failure",
  },

  expect: {
    timeout: 15000,
  },

  projects: [
    {
      name: "chromium",

      testIgnore: ["**/*.api.spec.js"],

      use: {
        ...devices["Desktop Chrome"],

        baseURL: process.env.WEB_URL,

        storageState: "./.auth/user.json",
      },
    },

    {
      name: "firefox",

      testIgnore: ["**/*.api.spec.js"],

      use: {
        ...devices["Desktop Firefox"],

        baseURL: process.env.WEB_URL,

        storageState: "./.auth/user.json",
      },
    },

    {
      name: "webkit",

      testIgnore: ["**/*.api.spec.js"],

      use: {
        ...devices["Desktop Safari"],

        baseURL: process.env.WEB_URL,

        storageState: "./.auth/user.json",
      },
    },

    {
      name: "api",

      testMatch: ["**/*.api.spec.js"],

      use: {
        baseURL: process.env.API_URL,

        extraHTTPHeaders: {
          "x-api-key": ENV.reqres.apiKey,
        },
      },
    },
  ],
});
