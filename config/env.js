export const ENV = {

  reqres: {

    apiKey:
      process.env.REQRES_API_KEY || '',

    email:
      process.env.REQRES_EMAIL || '',

    password:
      process.env.REQRES_PASSWORD || ''

  },

  mockapi: {

    baseURL:
      process.env.MOCKAPI_BASE_URL || ''

  },

  practiceTesting: {

    email:
      process.env.PST_EMAIL || '',

    password:
      process.env.PST_PASSWORD || ''

  }

};