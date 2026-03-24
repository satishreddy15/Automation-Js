const { test, expect } = require("@playwright/test");
test.use({
  baseURL: "https://qa.accushield.com",
  browserName: "chromium",
  headless: false,
  screenshot: "only-on-failure",
  video: "retain-on-failure",
  trace: "on-first-retry"
});
test.setTimeout(60000);
test("valid login credentials", async ({ page }) => {

  await page.goto("https://qa.accushield.com/auth/login");
  await page.getByPlaceholder("Email Address").fill("satish@yopmail.com");
  await page.getByPlaceholder("Password").fill("Satish@155");
  await page.getByText("visibility_off").click();
  await page.getByRole("checkbox", { name: "Remember me" }).check();

  await page.locator("//span[text()=' SIGN IN']").click();
  //await page.getByRole('button', { name: 'SIGN IN' }).click();

//   await expect(page).toHaveURL(/landing/);

//   await page.getByText("REPORTS").nth(1).click();
  //await page.locator("//ul[@class='cf']//a[contains(text(),'REPORTS')]").click();

//   await page.getByRole("link", { name: "Pre Scheduled Report" }).click();

  await page.locator('span:has-text("account_circle")').click();
  // await page.getByAltText("account_circle").click();

  await page.locator("//li/a[text()='Logout']").click();
  //await page.getByRole('link', { name: 'Logout' }).click();

//   await expect(page).toHaveURL(/LOGOUT/);
});