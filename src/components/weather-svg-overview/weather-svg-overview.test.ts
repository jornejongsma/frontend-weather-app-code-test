import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://localhost:6006/iframe.html?args=&id=jj-components--weathersvgoverview&viewMode=story');
});

test.describe('JJ-Components, weather-svg-overview', () => {
  test('Renders weather-svg-overview', async ({ page }) => {
  


  });
})
