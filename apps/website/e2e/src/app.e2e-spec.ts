import { browser, logging } from 'protractor';

import { AppPage } from './app.po';

describe('workspace-project App', (): void => {
  let page: AppPage;

  beforeEach((): void => {
    page = new AppPage();
  });

  it('should display welcome message', async (): Promise<void> => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('website app is running!');
  });

  afterEach(
    async (): Promise<void> => {
      // Assert that there are no errors emitted from the browser
      const logs: unknown = await browser.manage().logs().get(logging.Type.BROWSER);
      expect(logs).not.toContain(
        jasmine.objectContaining({
          level: logging.Level.SEVERE,
        } as logging.Entry),
      );
    },
  );
});
