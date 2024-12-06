// home.spec.js
const { test, expect } = require('@playwright/test');
const HomePage = require('../Pages/Apollo1');  // Import the HomePage class

test('Visit Apollo Pharmacy Homepage, click login button, and click on consultation image', async ({ page }) => {
  // Create an instance of the HomePage class
  const homePage = new HomePage(page);

  // Step 1: Visit the Apollo Pharmacy homepage
  await homePage.visitHomePage(); 
  // Step 3: Click the "Online Doctor Consultation" image
  await homePage.clickConsultationImage();
  // Optional: Assert that the URL changes to the login page (you can adjust the URL check based on actual behavior)
  await homePage.clickSelectAddress();
  await homePage.clickPincode();
  await homePage.typecode();
  await homePage.submitbut();
  await homePage.specialoffers();
  await homePage.SearchBox();
  await homePage.clickConsultationImage();
  await homePage.CartLogo();
  await homePage.gobacktoPharmacy();
  await homePage.clickBuyMedicines();
  await homePage.clickAllProducts();
  await homePage.clickBabyCare();
  await homePage.clicknds();
  await homePage.clickWomenCare();
  await homePage.clickPersonalcare();
  await homePage.clickAyurveda();
  await homePage.clickHealthDevices();
  await homePage.clickHomeEssentials();
  await homePage.clickHealthCondition();
  await homePage.clickFindDoctors();
  await homePage.clicklLabTests();
  await homePage.clickCircleMemb();
  await homePage.clickHealtRecords();
  await homePage.clickDiabR();
  await homePage.clickHealthInsurance();
  await homePage.clickBuyMedicines();
  await homePage.clickFindStore();
  await homePage.clickConsultationImage();
  await homePage.clickUploadNow();
  await homePage.clickConsultationImage();
  await homePage.clickHospitalVisit();
  await homePage.clickBuyMedicines();
  await homePage.clickVideoConsult();
  await homePage.clickBuyMedicines();
  await homePage.clicklLabTests();
  await homePage.clickBuyMedicines();
  await homePage.clickConsultDoctor();
  await homePage.clickBuyMedicines();
  await homePage.clickBannerDiabetes();
  await homePage.clickBuyMedicines();
  await homePage.clickApolloImageD();
  await homePage.clickGetitonGp();
  await homePage.clickonDownloadItOnApp();
  await homePage.clickonfacebook();
  await homePage.clickonTwitter();
  await homePage.clickonLinkedIn();
  await homePage.clickonYoutube();

  // Pause the browser for inspection (optional)
  await page.pause();
});
