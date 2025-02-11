import endpoint from "./configTypes";
import { test, expect } from "@playwright/test";

test("Expect to have signing up button", async ({ page }) => {
  // Go to the Droplets product page of DigitalOcean web page
  await page.goto(endpoint.DIGITAL_OCEAN_URL);

  // Wait for the page to load
  await page.waitForLoadState("networkidle");
  await expect(
    page.getByRole("link", { name: "Sign up", exact: true })
  ).toBeVisible();
});
