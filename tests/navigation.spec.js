import { test, expect } from '@playwright/test';

test('user can navigate to venue details', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#venue-container')).not.toContainText(
    'Loading...',
  );
  await page.locator('#venue-container a').first().click();
  await expect(
    page.getByRole('heading', { name: /Venue details/i }),
  ).toBeVisible();
});
