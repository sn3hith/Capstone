import { test, expect } from '@playwright/test';

test.describe('Apollo Pharmacy Regression Test Suite', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to the Apollo Pharmacy homepage before each test
    await page.goto('https://www.apollopharmacy.in/');
  });

  test('Verify the logo click redirects correctly', async ({ page }) => {
    await page.getByLabel('logo').first().click();
    await expect(page).toHaveURL('https://www.apollopharmacy.in/');
  });

  test('Verify Select Address click', async ({ page }) => {
    await page.getByText('Select Address').click();
    // Wait for navigation to complete
    await page.waitForNavigation({ timeout: 10000 });  // Wait up to 10 seconds
    // Use a more flexible URL matching pattern
    await expect(page).toHaveURL(/.*select-address/, { timeout: 10000 });
  });

  test('Verify Enter Delivery Pincode functionality', async ({ page }) => {
    await page.getByText('Enter Delivery Pincode').click();
    const pincodeInput = await page.getByPlaceholder('Enter pincode here');
    await expect(pincodeInput).toBeVisible();
    await pincodeInput.fill('600034');
    const submitButton = page.locator('button').filter({ hasText: 'Submit' });
    await submitButton.click();
    // Ensure some confirmation or redirection happens after pincode submission
    await page.waitForNavigation({ timeout: 10000 });  // Wait for the next page to load
    await expect(page).toHaveURL(/.*confirmation/, { timeout: 10000 });
  });

  test('Verify Special Offers link click', async ({ page }) => {
    await page.getByLabel('Offers').click();
    await page.waitForNavigation({ timeout: 10000 });  // Wait for navigation to complete
    await expect(page).toHaveURL(/.*offers/, { timeout: 10000 });
  });

  test('Verify Cart Icon click and navigation', async ({ page }) => {
    await page.getByLabel('Cart Icon').click();
    await page.waitForNavigation({ timeout: 10000 });  // Wait for navigation to complete
    await expect(page).toHaveURL(/.*cart/, { timeout: 10000 });
  });

  test('Verify Login button click', async ({ page }) => {
    await page.locator('div').filter({ hasText: /^Login$/ }).click();
    await expect(page.locator('text=Login')).toBeVisible();
  });

  test('Verify close button functionality', async ({ page }) => {
    await page.getByLabel('close button').click();
    await expect(page.locator('text=Login')).not.toBeVisible();
  });

  test('Verify Find Doctors link click', async ({ page }) => {
    await page.getByLabel('FindDoctors').click();
    await page.waitForNavigation({ timeout: 10000 });  // Wait for navigation to complete
    await expect(page).toHaveURL(/.*find-doctors/, { timeout: 10000 });
  });

  test('Verify Lab Tests link click', async ({ page }) => {
    await page.goto('https://www.apollo247.com/specialties');
    await page.getByRole('link', { name: 'Lab Tests', exact: true }).click();
    await page.waitForNavigation({ timeout: 10000 });  // Wait for navigation to complete
    await expect(page).toHaveURL(/.*lab-tests/, { timeout: 10000 });
  });

  test('Verify Circle Membership link click', async ({ page }) => {
    await page.getByRole('link', { name: 'Circle Membership', exact: true }).click();
    await page.waitForNavigation({ timeout: 10000 });  // Wait for navigation to complete
    await expect(page).toHaveURL(/.*circle-membership/, { timeout: 10000 });
  });

  test('Verify Diabetes Reversal link click', async ({ page }) => {
    await page.getByRole('link', { name: 'Diabetes Reversal' }).click();
    await page.waitForNavigation({ timeout: 10000 });  // Wait for navigation to complete
    await expect(page).toHaveURL(/.*diabetes-reversal/, { timeout: 10000 });
  });

  test('Verify Health Insurance link click', async ({ page }) => {
    await page.getByRole('link', { name: 'Health InsuranceExplore' }).click();
    await page.waitForNavigation({ timeout: 10000 });  // Wait for navigation to complete
    await expect(page).toHaveURL(/.*health-insurance/, { timeout: 10000 });
  });

  test('Verify Buy Medicines link click', async ({ page }) => {
    await page.getByRole('link', { name: 'Buy Medicines' }).click();
    await page.waitForNavigation({ timeout: 10000 });  // Wait for navigation to complete
    await expect(page).toHaveURL(/.*buy-medicines/, { timeout: 10000 });
  });

  test('Verify footer logo functionality', async ({ page }) => {
    await page.getByRole('contentinfo').getByLabel('logo').click();
    await expect(page).toHaveURL('https://www.apollopharmacy.in/');
  });

  test('Verify Google Play button opens correctly', async ({ page }) => {
    const page1Promise = page.waitForEvent('popup');
    await page.getByLabel('Google play').click();
    const page1 = await page1Promise;
    await expect(page1).toHaveURL(/.*play.google.com/, { timeout: 10000 });
  });

  test('Verify Apple Store button opens correctly', async ({ page }) => {
    const page2Promise = page.waitForEvent('popup');
    await page.getByLabel('Apple Store').click();
    const page2 = await page2Promise;
    await expect(page2).toHaveURL(/.*apps.apple.com/, { timeout: 10000 });
  });

  test('Verify Facebook button opens correctly', async ({ page }) => {
    const page3Promise = page.waitForEvent('popup');
    await page.getByLabel('Facebook').click();
    const page3 = await page3Promise;
    await expect(page3).toHaveURL(/.*facebook.com/, { timeout: 10000 });
  });

  test('Verify Twitter button opens correctly', async ({ page }) => {
    const page4Promise = page.waitForEvent('popup');
    await page.getByLabel('Twitter').click();
    const page4 = await page4Promise;
    await expect(page4).toHaveURL(/.*twitter.com/, { timeout: 10000 });
  });

  test('Verify Linkedin button opens correctly', async ({ page }) => {
    const page5Promise = page.waitForEvent('popup');
    await page.getByLabel('Linkedin').click();
    const page5 = await page5Promise;
    await expect(page5).toHaveURL(/.*linkedin.com/, { timeout: 10000 });
  });

  test('Verify Linkedin X.com page opens', async ({ page }) => {
    await page5.goto('https://x.com/ApolloPharmacy');
    await expect(page5).toHaveURL('https://x.com/ApolloPharmacy');
  });

});
