import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:6006/iframe.html?args=&id=weather-app-jj-components--my-component&viewMode=story');
});

test.describe('JJ-Components, my-component', () => {
  test('Renders my-component', async ({ page }) => {
  


  });
})
