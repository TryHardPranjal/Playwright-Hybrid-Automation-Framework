# Playwright Hybrid Automation Framework

<div align="center">

# Playwright Hybrid Automation Framework

A production-grade **Hybrid Test Automation Framework** built using **Playwright + JavaScript (ES Modules)** for scalable **UI**, **API**, and **Hybrid automation testing** with modern CI/CD practices.

Designed with enterprise-level framework principles including **Page Object Model (POM)**, **Service Layer Architecture**, **Environment Configuration**, **API Mocking**, **Reusable Fixtures**, and **GitHub Actions CI/CD**.

<br>

[![Playwright Tests](https://github.com/TryHardPranjal/Playwright-Hybrid-Automation-Framework/actions/workflows/playwright.yml/badge.svg)](https://github.com/TryHardPranjal/Playwright-Hybrid-Automation-Framework/actions/workflows/playwright.yml)

![Playwright](https://img.shields.io/badge/Playwright-Automation-green)

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

![NodeJS](https://img.shields.io/badge/Node.js-Runtime-brightgreen)

![Allure](https://img.shields.io/badge/Allure-Reporting-orange)

![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI/CD-blue)

![License](https://img.shields.io/badge/License-ISC-red)

![Status](https://img.shields.io/badge/Status-Active-success)

</div>

---

## Framework Capabilities

✔ UI Automation Testing  
✔ API Automation Testing  
✔ Hybrid UI + API Validation  
✔ Request Interception & Mocking  
✔ Page Object Model (POM)  
✔ Service Layer Architecture  
✔ Fixture-based Dependency Injection  
✔ Environment-Based Execution  
✔ Parallel Cross-browser Execution  
✔ GitHub Actions CI/CD Integration  
✔ Allure Reporting & GitHub Pages Hosting  

---

## Live Report

Live Allure Report:

https://tryhardpranjal.github.io/Playwright-Hybrid-Automation-Framework/

---

## Why This Framework?

This project is designed to simulate a **real-world enterprise automation framework** rather than a simple test repository.

The framework demonstrates:

- Scalable automation architecture
- Separation of concerns
- Reusable and maintainable code structure
- Professional CI/CD practices
- Hybrid testing techniques
- Debugging and reporting strategies
- Portfolio-ready implementation for SDET/QA roles

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Configuration](#configuration)
- [Running Tests](#running-tests)
- [Reporting](#reporting)
- [CI/CD Workflow](#cicd-workflow)
- [Authentication Strategy](#authentication-strategy)
- [Design Principles](#design-principles)
- [Adding New Tests](#adding-new-tests)
- [Troubleshooting](#troubleshooting)
- [Project Summary](#project-summary)
- [License](#license)

---

## Overview

This framework is designed to demonstrate real-world automation skills across UI, API, and hybrid testing.

It currently covers:

- user login and authentication flows
- product search, sorting, filtering, and product details validation
- cart, checkout, and cart removal flows
- API CRUD operations using MockAPI
- API response validation with ReqRes
- request interception and response mocking
- cross-browser execution
- environment-based execution
- Allure reporting and hosted test reports

The framework is structured to be readable, reusable, and easy to extend.

---

## Key Features

- Page Object Model for UI pages
- Service layer for reusable business flows
- Centralized selectors in each page object
- Fixture-based dependency injection
- Reusable API client and auth helper
- Dynamic test data generation
- Environment switching through `config/environments/`
- Local and CI-friendly authentication strategy
- Cross-browser support: Chromium, Firefox, WebKit
- Parallel execution support
- Playwright HTML report
- Allure report generation
- Allure hosted on GitHub Pages
- Debug artifacts on failure
- Manual workflow dispatch with browser and suite selection
- GitHub Actions caching for Node and Playwright browsers

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Playwright | UI, API, and hybrid automation |
| JavaScript (ES Modules) | Framework and test code |
| Node.js | Runtime |
| dotenv | Environment configuration |
| Allure | Test reporting |
| GitHub Actions | CI/CD |
| GitHub Pages | Hosted Allure report |

---

## Architecture

The framework follows a layered design:

```text
Tests
↓
Services
↓
Pages
↓
Playwright
```

### What Each Layer Does

- **Tests**: contain scenario flow and assertions
- **Services**: contain reusable business operations
- **Pages**: contain locators and page-level actions
- **Utils**: contain logging, random data, retry, and helper utilities
- **Config**: manages environments, URLs, and environment loading
- **API Utils**: manage reusable request/response handling

---

## Project Structure

```text
Playwright-Hybrid-Automation-Framework/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── api-utils/
│   ├── apiClient.js
│   └── authHelper.js
├── config/
│   ├── env.js
│   ├── loadEnv.js
│   └── environments/
│       ├── dev.env
│       ├── qa.env
│       ├── stage.env
│       └── prod.env
├── fixtures/
│   └── baseFixture.js
├── pages/
│   ├── CartPage.js
│   ├── LoginPage.js
│   └── ProductsPage.js
├── payloads/
│   └── mockApiUserPayload.json
├── services/
│   ├── AuthService.js
│   ├── CartService.js
│   └── ProductService.js
├── test-data/
│   └── products.json
├── tests/
│   ├── api/
│   │   ├── TC_API_01_E2E_Flow.api.spec.js
│   │   ├── TC_API_02_EndpointValidation.api.spec.js
│   │   ├── TC_API_03_InterceptMockResponse.api.spec.js
│   │   └── TC_API_04_AuthenticatedUser.api.spec.js
│   ├── hybrid/
│   │   ├── TC_01_CreateUserAPIValidateUI.hybrid.spec.js
│   │   └── TC_02_AddToCartNetworkValidation.hybrid.spec.js
│   └── ui/
│       ├── TC_01_Login.ui.spec.js
│       ├── TC_02_Cart.ui.spec.js
│       ├── TC_03_Checkout.ui.spec.js
│       ├── TC_04_ProductSearch.ui.spec.js
│       ├── TC_05_ProductFilter.ui.spec.js
│       ├── TC_06_ProductDetails.ui.spec.js
│       ├── TC_07_RemoveCartItem.ui.spec.js
│       ├── TC_08_InvalidLogin.ui.spec.js
│       ├── TC_09_SortProducts.ui.spec.js
│       └── TC_10_EmptySearch.ui.spec.js
├── utils/
│   ├── DateHelper.js
│   ├── FileHelper.js
│   ├── Logger.js
│   ├── RandomData.js
│   ├── RetryHelper.js
│   └── WaitHelper.js
├── .env
├── .gitignore
├── global.setup.js
├── jsconfig.json
├── package-lock.json
├── package.json
├── playwright.config.js
├── README.md
└── tree.ps1
```

### Generated at Runtime

These folders and files are created during test runs and should not be committed:

```text
.auth/
allure-results/
allure-report/
playwright-report/
test-results/
setup-page.png
```

---

## Prerequisites

- Node.js 18 or later
- npm
- Git
- Optional: Java 21 for local Allure CLI usage

---

## Setup

### Clone the Repository

```bash
git clone https://github.com/TryHardPranjal/Playwright-Hybrid-Automation-Framework.git
cd Playwright-Hybrid-Automation-Framework
```

### Install Dependencies

```bash
npm ci
```

### Install Playwright Browsers

```bash
npx playwright install --with-deps
```

If you only want the supported browsers:

```bash
npx playwright install chromium firefox webkit
```

---

## Configuration

### Local `.env`

Create a `.env` file in the project root.

Example:

```env
REQRES_API_KEY=your_reqres_api_key
REQRES_EMAIL=eve.holt@reqres.in
REQRES_PASSWORD=cityslicka
MOCKAPI_BASE_URL=https://6a02e16f0d92f63dd25460eb.mockapi.io
PST_EMAIL=your_practice_testing_email
PST_PASSWORD=your_practice_testing_password
```

### Environment Files

The framework supports environment-based configuration through:

- `config/environments/dev.env`
- `config/environments/qa.env`
- `config/environments/stage.env`
- `config/environments/prod.env`

These are selected using `TEST_ENV`.

### GitHub Actions Configuration

Use Repository Variables for non-sensitive URLs:

- `WEB_URL`
- `API_URL`
- `MOCKAPI_BASE_URL`

Use Repository Secrets for credentials and tokens:

- `REQRES_API_KEY`
- `REQRES_EMAIL`
- `REQRES_PASSWORD`
- `PST_EMAIL`
- `PST_PASSWORD`

---

## Running Tests

### Full Suite

```bash
npm run test
```

### UI Only

```bash
npm run test:ui
```

### API Only

```bash
npm run test:api
```

### Smoke Suite

```bash
npm run test:smoke
```

### Regression Suite

```bash
npm run test:regression
```

### Sanity Suite

```bash
npm run test:sanity
```

### E2E Suite

```bash
npm run test:e2e
```

### Browser-Specific Runs

```bash
npm run test:chrome
npm run test:firefox
npm run test:safari
npm run test:crossbrowser
```

### Hybrid Tests Only

```bash
npm run test:hybrid
```

### Environment-Specific Runs

```bash
npm run test:dev
npm run test:qa
npm run test:stage
```

---

## Reporting

### Playwright HTML Report

After any run:

```bash
npx playwright show-report
```

### Allure Report

Generate:

```bash
npm run allure:generate
```

Open locally:

```bash
npm run allure:open
```

### Hosted Allure Report

The latest report is published automatically via GitHub Pages:

**Live Allure Report**

The hosted report is used to review:

- pass/fail summary
- test history
- failure screenshots and traces
- API request/response details
- execution trends
- CI/CD results

---

## CI/CD Workflow

The GitHub Actions workflow is located at:

```text
.github/workflows/playwright.yml
```

### Workflow Highlights

- runs on push to `main`
- supports manual execution via `workflow_dispatch`
- allows environment selection
- allows browser selection for manual runs
- caches npm dependencies
- caches Playwright browsers
- runs Chromium UI + hybrid tests on push
- runs API tests on push
- uploads Playwright artifacts
- generates Allure report even when tests fail
- publishes Allure report to GitHub Pages

### Manual Workflow Inputs

When starting the workflow manually, you can choose:

- `environment`: `dev`, `qa`, `stage`, `prod`
- `suite`: `all`, `smoke`, `api`, `regression`, `e2e`
- `browser`: `chromium`, `firefox`, `webkit`, `crossbrowser`

---

## Authentication Strategy

This framework uses a stable authentication approach for the public demo site.

### How It Works

- API login is used to generate auth data
- auth data is stored in `.auth/user.json`
- browser tests reuse this storage state
- this keeps tests stable across local runs and CI

### Why This Approach

The public demo application can be affected by browser protection, rate limits, or account resets. Using API-auth-backed storage state is more reliable than depending on repeated UI logins for every run.

---

## Design Principles

This framework follows a few core principles:

- one responsibility per page object
- reusable business actions in services
- centralized locators inside pages
- dynamic data instead of hardcoded values
- strong separation of UI, API, and hybrid tests
- local and CI-friendly execution
- readable logging for debugging

---

## Adding New Tests

### UI Test

Add a new spec under:

```text
tests/ui/
```

Use the existing page and service layer instead of placing locators directly in the spec.

### API Test

Add a new spec under:

```text
tests/api/
```

Use the reusable API client and auth helper where applicable.

### Hybrid Test

Add a new spec under:

```text
tests/hybrid/
```

Use hybrid tests when a UI action must be validated with network-level assertions.

---

## Troubleshooting

### Browser Installation Issues

Reinstall browsers:

```bash
npx playwright install chromium firefox webkit
```

### Clear Generated Artifacts

```bash
npm run clean
```

### Open Last HTML Report

```bash
npx playwright show-report
```

### Common CI Issues

- missing GitHub Secrets or Variables
- wrong environment selection
- stale auth state
- browser-specific timing differences
- API rate limits or account resets on public demo apps

---

## Project Summary

This framework demonstrates:

- UI automation using Playwright and POM
- API testing with reusable helpers
- hybrid flows that validate backend behavior from UI actions
- dynamic data generation
- environment-aware execution
- browser compatibility
- parallel execution
- GitHub Actions CI/CD
- Allure report hosting on GitHub Pages

---

## License

ISC
