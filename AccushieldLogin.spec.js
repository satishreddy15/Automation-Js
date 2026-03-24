import { test, expect } from "@playwright/test";
import { LoginPage } from "./loginpageAccushield";
import { HomePage } from "./homepageAccushield";
import { LogoutPage } from "./logoutpageAccushield";

test.use({
  baseURL: "https://qa.accushield.com",
  browserName: "chromium",
  headless: false,
  screenshot: "only-on-failure",
  video: "retain-on-failure",
  trace: "on-first-retry"
});

test("login,home,logout pages using POM", async ({ page }) => {
  test.setTimeout(60000);

  // Initialize page objects
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const logoutPage = new LogoutPage(page);

  // Perform login
  await loginPage.gotoLoginPage();
  await loginPage.login('satish@yopmail.com', 'Satish@155');

  // Navigate to reports
  await homePage.navigateToPreScheduledReport();

  // Perform logout
  await logoutPage.logout();
});


 




