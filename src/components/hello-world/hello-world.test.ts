import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://localhost:6006/iframe.html?args=&id=jj-components--helloworld&viewMode=story');
});

test.describe('JJ-Components, hello-world', () => {
  test('Renders hello-world', async ({ page }) => {
  


  });
})
