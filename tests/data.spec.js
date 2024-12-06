import { test, expect } from '@playwright/test';

// Load the data from testdata.json
const testdata = JSON.parse(JSON.stringify(require("../testdata.json")));

test('data-driven testing for Apollo Pharmacy', async ({ page }) => {
  // Test the homepage
  await page.goto('https://www.apollopharmacy.in/');

  // Select address
  await page.getByText('Select Address').click();
  await page.getByText('Enter Delivery Pincode').click();
  await page.getByPlaceholder('Enter pincode here').fill('600034');
  await page.locator('button').filter({ hasText: 'Submit' }).click();

  // Buy medicines
  await page.locator('li').filter({ hasText: 'Buy Medicines' }).click();
  
  // Find doctors section
  await page.getByLabel('FindDoctors').click();

  // Navigate to Apollo 247 specialties
  await page.goto('https://www.apollo247.com/specialties');
  
  // Click on Lab Tests and other links
  await page.getByRole('link', { name: 'Lab Tests', exact: true }).click();
  await page.getByRole('link', { name: 'Circle Membership', exact: true }).click();
  await page.getByRole('link', { name: 'Health Records' }).click();
  await page.getByRole('link', { name: 'Diabetes Reversal' }).click();
  await page.getByRole('link', { name: 'Health InsuranceExplore' }).click();
  await page.getByRole('link', { name: 'Buy Medicines' }).click();
  await page.getByRole('link', { name: 'Apollo Products' }).click();
  //await page.getByRole('link', { name: 'Baby Care' }).click();
  await page.getByRole('link', { name: 'Nutritional Drinks &' }).click();
  await page.getByRole('link', { name: 'Women Care' }).click();
  //await page.getByRole('link', { name: 'Personal Care' }).click();
  await page.getByRole('link', { name: 'Ayurveda' }).click();
  await page.getByRole('link', { name: 'Health Devices' }).click();
  await page.getByRole('link', { name: 'Home Essentials' }).click();
  await page.getByRole('link', { name: 'Health Condition' }).click();
});
