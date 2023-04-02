import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {};

export default async function globalSetup() {
  // Configure your environment here
  // For example, launch a browser and create a new context
  config.context = await browser.newContext();
}

export { config };
