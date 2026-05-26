import dotenv from "dotenv";

const environment = process.env.TEST_ENV || "dev";

dotenv.config({
  path: `./config/environments/${environment}.env`,
});

console.log(`Environment Loaded: ${environment}`);
