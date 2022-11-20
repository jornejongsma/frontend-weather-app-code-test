import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://localhost:6006/iframe.html?args=&id=jj-components--weatherwidgetcurrent&viewMode=story');
});

test.describe('JJ-Components, weather-widget-current', () => {
  test('Renders weather-widget-current', async ({ page }) => {
  


  });
})
