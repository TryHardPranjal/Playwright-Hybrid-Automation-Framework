import { request } from "@playwright/test";

import Logger from "./utils/Logger.js";

async function globalSetup() {

  const requestContext =

    await request.newContext();

  const loginResponse =

    await requestContext.post(

      "https://api.practicesoftwaretesting.com/users/login",

      {

        data: {

          email:
            process.env.PST_EMAIL,

          password:
            process.env.PST_PASSWORD

        }

      }

    );

  if (
    loginResponse.status() !== 200
  ) {

    throw new Error(

      `Login failed: ${loginResponse.status()}`

    );

  }

  const body =

    await loginResponse.json();

  const token =
    body.access_token;

  Logger.info(
    "Token generated"
  );

  const storageState = {

    cookies: [],

    origins: [

      {

        origin:

        process.env.WEB_URL,

        localStorage: [

          {

            name:
              "auth-token",

            value:
              token

          }

        ]

      }

    ]

  };

  const fs = await import("fs");

  fs.writeFileSync(

    "./.auth/user.json",

    JSON.stringify(
      storageState,
      null,
      2
    )

  );

  Logger.info(
    "Auth state saved successfully"
  );

}

export default globalSetup;