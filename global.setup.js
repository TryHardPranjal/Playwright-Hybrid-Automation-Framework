import { request } from "@playwright/test";
import fs from "fs";
import Logger from "./utils/Logger.js";

async function globalSetup() {
  const api = await request.newContext();

  const response = await api.post(
    "https://api.practicesoftwaretesting.com/users/login",
    {
      data: {
        email: process.env.PST_EMAIL,
        password: process.env.PST_PASSWORD,
      },
    },
  );

  if (response.status() !== 200) {
    throw new Error(`Login failed: ${response.status()}`);
  }

  const { access_token } = await response.json();

  if (!access_token) {
    throw new Error("No auth token received");
  }

  fs.mkdirSync(".auth", { recursive: true });

  fs.writeFileSync(
    "./.auth/user.json",
    JSON.stringify(
      {
        cookies: [],
        origins: [
          {
            origin: process.env.WEB_URL,
            localStorage: [
              {
                name: "auth-token",
                value: access_token,
              },
            ],
          },
        ],
      },
      null,
      2,
    ),
  );

  await api.dispose();
  Logger.info("Auth state generated");
}

export default globalSetup;
