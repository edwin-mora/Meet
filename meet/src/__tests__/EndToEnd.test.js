/* Feature 2: Show/hide an event details
Scenario 1: An event element is collapsed by default.
Scenario 2: User can expand an event to see its details.
Scenario 3: User can collapse an event to hide its details. */

import Puppeteer from "puppeteer";


describe('show/hide an event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(30000);
		browser = await Puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });
	//first scenario
  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .event__Details');
    expect(eventDetails).toBeNull();
  });

	//second scenario
  test('User can expand an event to see its details', async () => {
    await page.click('.event .details-button');
    const eventDetails = await page.$('.event .event__Details');
    expect(eventDetails).toBeDefined();
  });

	//third scenario
	 test('User can collapse an event to hide its details', async () => {
    await page.click('.event .details-button');
    const eventDetails = await page.$('.event .event__Details');
    expect(eventDetails).toBeNull();
  });

});



























/** save for end:
 * const browser = await Puppeteer.launch({
			headless: false,
			slowMo: 250, //slow down by 250ms
			ignoreDefaultArgs: ['--disable-extensions'] //ignores default setting that causes tiemout erros
		});
 */