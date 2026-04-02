const { test, expect } = require("@playwright/test");
test("Successful login", async ({ page }) => {
  await page.goto("/auth/login");
await expect(page.locator("//img[@class='accuLogo']")).toBeVisible();
  await page.getByPlaceholder("Email Address").fill("satish@yopmail.com");
  await page.getByPlaceholder("Password").fill("Satish@155");
  await page.getByText("visibility_off").click({timeout:15000});
  await page.getByRole("checkbox", { name: "Remember me" }).check();
  await page.pause();
  await page.locator("//span[text()=' SIGN IN']").click();
})
test("Logout Functionality", async ({ page }) => {
  await page.goto("/auth/login");
  await page.getByPlaceholder("Email Address").fill("satish@yopmail.com");
  await page.getByPlaceholder("Password").fill("Satish@155");
  await page.getByText("visibility_off").click({timeout:15000});
  await page.getByRole("checkbox", { name: "Remember me" }).check();
  await page.locator("//span[text()=' SIGN IN']").click();
  await page.locator('span:has-text("account_circle")').click();
  await page.locator("//li/a[text()='Logout']").click();
  await expect(page).toHaveURL("/auth/login");
})
test("Invalid Credentials", async ({ page }) => {
  await page.goto("/auth/login");
  await page.getByPlaceholder("Email Address").fill("satishch@yopmail.com");
  await page.getByPlaceholder("Password").fill("Satish$155");
  await page.getByText("visibility_off").click({timeout:15000});  
  await page.getByRole("checkbox", { name: "Remember me" }).check();
  await expect(page.locator("//*[text()='Remember me']")).toBeVisible();
  await page.locator("//span[text()=' SIGN IN']").click();
});




























