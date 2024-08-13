// @ts-check
const { test, expect } = require('@playwright/test');

test('Open Page and reload it', async ({ page }) => {
  

  for (let i = 1; i <= 10000; i++) {
    console.log(`Reloading page - Iteration ${i}`);
    await page.goto('irkhamA');

    // Expect a title "to contain" a substring.
    //await expect(page).toHaveTitle(/GitHub/);
    
    await page.reload();
    //await page.waitForTimeout(2000); // Optional: Wait for 1 second between reloads
  }

});
