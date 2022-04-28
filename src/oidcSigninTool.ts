
import { TestBrowserAuthorizationClient, TestBrowserAuthorizationClientConfiguration, TestUsers } from "@itwin/oidc-signin-tool";
import * as dotenv from "dotenv";
import * as dotenvExpand from "dotenv-expand";
import * as fs from "fs";

const loadEnv: () => void = () => {
  const envFile = process.env.IMJS_CONFIG_FILE_2X ?? undefined;
  if (!envFile) {
    throw new Error("No config filepath set to IMJS_CONFIG_FILE_2X");
  }

  if (!fs.existsSync(envFile)) {
    throw new Error(`The ${envFile} path does not exist`);
  }
  
  const env = dotenv.config({ path: envFile });  
  dotenvExpand.expand(env);
}

const main: () => Promise<void> = async () => {
  loadEnv();
  const config: TestBrowserAuthorizationClientConfiguration = {
    clientId: process.env.IMJS_OIDC_ULAS_TEST_CLIENT_ID ?? "",
    redirectUri: process.env.IMJS_OIDC_ULAS_TEST_REDIRECT_URI ?? "",
    scope: process.env.IMJS_OIDC_ULAS_TEST_SCOPES ?? "",
  }

  const client = new TestBrowserAuthorizationClient(config, TestUsers.regular);
  await client.signIn();
  const token = await client.getAccessToken();
  console.log(`Access Token: \n${token}`);
}

main().catch((err) => {
  console.log(err);
});