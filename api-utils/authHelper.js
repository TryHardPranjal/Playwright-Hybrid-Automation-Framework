import { ENV } from "../config/env.js";
import Logger
from "../utils/Logger.js";

class AuthHelper {
  static token;

  static async getToken(request) {
    if (this.token) {
      return this.token;
    }

    const loginPayload = {
      email: ENV.reqres.email,

      password: ENV.reqres.password,
    };

    const loginResponse = await request.post("/api/login", {
      data: loginPayload,
    });

    const responseBody = await loginResponse.json();

    Logger.info("\nReqRes Login Response:", responseBody);

    if (!responseBody.token) {
      throw new Error("Token generation failed");
    }

    this.token = responseBody.token;

    return this.token;
  }
}

export default AuthHelper;
