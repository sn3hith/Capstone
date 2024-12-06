import { test, expect } from '@playwright/test';

test.describe('Apollo Pharmacy Regression Test Suite', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to the Apollo Pharmacy homepage before each test
    await page.goto('https://www.apollopharmacy.in/');
  });

  test('Verify the logo click redirects correctly', async ({ page }) => {
    await page.getByLabel('logo').first().click();
    // You can check if the logo click navigates to the correct page
    await expect(page).toHaveURL('https://www.apollopharmacy.in/');
  });

  test('Verify Select Address click', async ({ page }) => {
    await page.getByText('Select Address').click();
    // Check if the address selection is visible
    await expect(page).toHaveURL(/.*select-address/);  // Adjust this based on actual URL structure
  });

  test('Verify Enter Delivery Pincode functionality', async ({ page }) => {
    await page.getByText('Enter Delivery Pincode').click();
    const pincodeInput = await page.getByPlaceholder('Enter pincode here');
    await expect(pincodeInput).toBeVisible();
    await pincodeInput.fill('600034');
    const submitButton = page.locator('button').filter({ hasText: 'Submit' });
    await submitButton.click();
    // Ensure some confirmation or redirection happens after pincode submission
    await expect(page).toHaveURL(/.*confirmation/); // Adjust based on the confirmation page
  });

  test('Verify Special Offers link click', async ({ page }) => {
    await page.getByLabel('Offers').click();
    // Ensure the special offers page or section appears
    await expect(page).toHaveURL(/.*offers/);  // Adjust based on actual URL
  });

  test('Verify Cart Icon click and navigation', async ({ page }) => {
    await page.getByLabel('Cart Icon').click();
    // Check if the cart page is visible after clicking the cart icon
    await expect(page).toHaveURL(/.*cart/);  // Adjust based on actual URL
  });

  test('Verify Login button click', async ({ page }) => {
    await page.locator('div').filter({ hasText: /^Login$/ }).click();
    // Ensure that the login modal or page opens up
    await expect(page.locator('text=Login')).toBeVisible();
  });

  test('Verify close button functionality', async ({ page }) => {
    await page.getByLabel('close button').click();
    // Ensure the modal closes after clicking the close button
    await expect(page.locator('text=Login')).not.toBeVisible();
  });

  test('Verify Find Doctors link click', async ({ page }) => {
    await page.getByLabel('FindDoctors').click();
    // Ensure navigation to the Find Doctors page or section
    await expect(page).toHaveURL(/.*find-doctors/);  // Adjust based on actual URL
  });

  test('Verify Lab Tests link click', async ({ page }) => {
    await page.goto('https://www.apollo247.com/specialties');
    await page.getByRole('link', { name: 'Lab Tests', exact: true }).click();
    // Ensure Lab Tests page is visible
    await expect(page).toHaveURL(/.*lab-tests/);  // Adjust based on actual URL
  });

  test('Verify Circle Membership link click', async ({ page }) => {
    await page.getByRole('link', { name: 'Circle Membership', exact: true }).click();
    // Ensure Circle Membership page is visible
    await expect(page).toHaveURL(/.*circle-membership/);  // Adjust based on actual URL
  });

  test('Verify Health Records link click', async ({ page }) => {
    await page.getByRole('link', { name: 'Health Records' }).click();
    // Ensure Health Records page is visible
    await expect(page).toHaveURL(/.*health-records/);  // Adjust based on actual URL
  });

  test('Verify Diabetes Reversal link click', async ({ page }) => {
    await page.getByRole('link', { name: 'Diabetes Reversal' }).click();
    // Ensure Diabetes Reversal page is visible
    await expect(page).toHaveURL(/.*diabetes-reversal/);  // Adjust based on actual URL
  });

  test('Verify Health Insurance link click', async ({ page }) => {
    await page.getByRole('link', { name: 'Health InsuranceExplore' }).click();
    // Ensure Health Insurance page is visible
    await expect(page).toHaveURL(/.*health-insurance/);  // Adjust based on actual URL
  });

  test('Verify Buy Medicines link click', async ({ page }) => {
    await page.getByRole('link', { name: 'Buy Medicines' }).click();
    // Ensure Buy Medicines page is visible
    await expect(page).toHaveURL(/.*buy-medicines/);  // Adjust based on actual URL
  });

  test('Verify footer logo functionality', async ({ page }) => {
    await page.getByRole('contentinfo').getByLabel('logo').click();
    // Ensure the footer logo redirects to the homepage
    await expect(page).toHaveURL('https://www.apollopharmacy.in/');
  });

  test('Verify Google Play button opens correctly', async ({ page }) => {
    const page1Promise = page.waitForEvent('popup');
    await page.getByLabel('Google play').click();
    const page1 = await page1Promise;
    await expect(page1).toHaveURL(/.*play.google.com/);  // Adjust based on actual URL
  });

  test('Verify Apple Store button opens correctly', async ({ page }) => {
    const page2Promise = page.waitForEvent('popup');
    await page.getByLabel('Apple Store').click();
    const page2 = await page2Promise;
    await expect(page2).toHaveURL(/.*apps.apple.com/);  // Adjust based on actual URL
  });

  test('Verify Facebook button opens correctly', async ({ page }) => {
    const page3Promise = page.waitForEvent('popup');
    await page.getByLabel('Facebook').click();
    const page3 = await page3Promise;
    await expect(page3).toHaveURL(/.*facebook.com/);  // Adjust based on actual URL
  });

  test('Verify Twitter button opens correctly', async ({ page }) => {
    const page4Promise = page.waitForEvent('popup');
    await page.getByLabel('Twitter').click();
    const page4 = await page4Promise;
    await expect(page4).toHaveURL(/.*twitter.com/);  // Adjust based on actual URL
  });

  test('Verify Linkedin button opens correctly', async ({ page }) => {
    const page5Promise = page.waitForEvent('popup');
    await page.getByLabel('Linkedin').click();
    const page5 = await page5Promise;
    await expect(page5).toHaveURL(/.*linkedin.com/);  // Adjust based on actual URL
  });

  test('Verify Linkedin X.com page opens', async ({ page }) => {
    await page5.goto('https://x.com/ApolloPharmacy');
    // Ensure the page has loaded successfully
    await expect(page5).toHaveURL('https://x.com/ApolloPharmacy');
  });

});
