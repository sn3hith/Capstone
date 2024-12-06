const { test, expect } = require("@playwright/test");
test.use({
  baseURL: "https://www.apollopharmacy.in/",
  ignoreHTTPSErrors: true,
});
test.describe("API GET Request - 200 Status Code Verification", () => {
  const endpoints = [
    "https://www.apollopharmacy.in/special-offers",
    "https://www.apollopharmacy.in/medicines-cart?source=Home",
    "https://www.apollo247.com/specialties",
    "https://www.apollo247.com/lab-tests?lat=13.058048&long=80.232448",
    "https://www.apollo247.com/circle-landing",
    "https://www.apollo247.com/health-records",
    "https://www.apollo247.com/apollo-super6-program",
    "https://www.apollo247.com/insurance?utm_source=HANA_Insurance&utm_medium=Header&utm_campaign=Apollo247_Insurance_Homepage",
    "https://www.apollopharmacy.in/shop-by-category/apollo-products",
    "https://www.apollopharmacy.in/shop-by-category/baby-care",
    "https://www.apollopharmacy.in/shop-by-category/nutritional-drinks-supplements",
    "https://www.apollopharmacy.in/shop-by-category/women-care",
    "https://www.apollopharmacy.in/shop-by-category/personal-care-1",
    "https://www.apollopharmacy.in/shop-by-category/ayurveda",
    "https://www.apollopharmacy.in/shop-by-category/health-devices",
    "https://www.apollopharmacy.in/shop-by-category/home-essentials",
    "https://www.apollopharmacy.in/shop-by-category/otc",
    "https://www.apollopharmacy.in/pharmacy-nearby",
    "https://www.apollopharmacy.in/upload-prescription",
    //"https://www.apollo247.com/specialties",
    "https://www.apollo247.com/lab-tests",
    "https://apollo247.onelink.me/775G?pid=HANA_Brand&c=GoodDoctor_SC&af_dp=apollopatients://CommonWebView?url=https://apollo247.com/symptom-checker-doctors?isMobile=true&hideHeader=true&deep_link_value=apollopatients://CommonWebView?url=https://apollo247.com/symptom-checker-doctors?isMobile=true&hideHeader=true&deep_link_sub1=apollopatients://CommonWebView?url=https://apollo247.com/symptom-checker-doctors?isMobile=true&hideHeader=true&af_channel=QR&af_web_dp=https://apollo247.com/symptom-checker-doctors?utm_source=HANA_Brand&utm_medium=QR&utm_campaign=GoodDoctor_SC&deep_link_value=apollopatients://CommonWebView?url=https://apollo247.com/symptom-checker-doctors?isMobile=true&hideHeader=true",
    "https://www.apollo247.com/symptom-checker?source=homePage",
    //"https://www.apollo247.com/apollo-super6-program",
    "https://www.apollopharmacy.in/about-us",
    
  ];
 
  for (const endpoint of endpoints) {
    test(`GET ${endpoint}`, async ({ request }) => {
      const response = await request.get(endpoint);
 
      // Assert the status is 200
      expect(response.status()).toBe(200);
    });
  }
});