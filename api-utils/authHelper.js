import { ENV } from '../config/env.js';

class AuthHelper {

  static token;
  static async getToken(request) {
    if (this.token) {
      return this.token;
    }

    const loginPayload = {
      email: ENV.reqres.email,
      password: ENV.reqres.password
    };

    const loginResponse =
      await request.post(
        '/api/login',
        {
          data: loginPayload
        }
      );

    const responseBody =
      await loginResponse.json();
    this.token =
      responseBody.token;
    return this.token;
  }
}

export default AuthHelper;