import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:6006/iframe.html?id=weather-widgets-weather-widget-current--weather-widget-current&viewMode=story');
});

test.describe('JJ-Components, weather-widget-current', () => {
  test('Renders weather-widget-current', async ({ page }) => {
  


  });
})
