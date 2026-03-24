exports.HomePage = class HomePage {
// export class HomePage {
  constructor(page) {   //All these are attribute of the elements
    this.page = page;
    this.reportsLink = page.getByText('REPORTS').nth(1);
    this.preScheduledReportLink = page.getByRole('link', { name: 'Pre Scheduled Report' });
  }

  async navigateToPreScheduledReport() {   //All these are corresponding action methods
    await this.reportsLink.click();
    await this.preScheduledReportLink.click();
  }
}
