import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.apollopharmacy.in/');
  await page.getByLabel('logo').first().click();
  await page.getByText('Select Address').click();
  await page.getByText('Enter Delivery Pincode').click();
  await page.getByPlaceholder('Enter pincode here').fill('600034');
  await page.locator('button').filter({ hasText: 'Submit' }).click();
  await page.getByLabel('Offers').click();
  await page.getByLabel('Cart Icon').click();
  await page.locator('div').filter({ hasText: /^Login$/ }).click();
  await page.getByLabel('close button').click();
  await page.getByLabel('logo').first().click();
  await page.getByLabel('FindDoctors').click();
  await page.goto('https://www.apollo247.com/specialties');
  await page.getByRole('link', { name: 'Lab Tests', exact: true }).click();
  await page.getByRole('link', { name: 'Circle Membership', exact: true }).click();
  await page.getByRole('link', { name: 'Health Records' }).click();
  await page.getByRole('link', { name: 'Diabetes Reversal' }).click();
  await page.getByRole('link', { name: 'Health InsuranceExplore' }).click();
  await page.getByRole('link', { name: 'Buy Medicines' }).click();
  await page.getByRole('contentinfo').getByLabel('logo').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByLabel('Google play').click();
  const page1 = await page1Promise;
  const page2Promise = page.waitForEvent('popup');
  await page.getByLabel('Apple Store').click();
  const page2 = await page2Promise;
  const page3Promise = page.waitForEvent('popup');
  await page.getByLabel('Facebook').click();
  const page3 = await page3Promise;
  await page.getByLabel('Twitter').click();
  const page5Promise = page.waitForEvent('popup');
  await page.getByLabel('Linkedin').click();
  const page5 = await page5Promise;
  await page5.goto('https://x.com/ApolloPharmacy');
});