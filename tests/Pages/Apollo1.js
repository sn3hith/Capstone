// home.page.js
class HomePage {
  constructor(page) {
    this.page = page;
   // this.loginButton = page.locator('text=Login');  // Locator for the login button
    this.consultationImage = page.locator('//img[@title="Online Doctor Consultation & Medicines"]');  // Locator for the image
    this.selectAddress = page.locator("//p[normalize-space()='Select Address']")
    this.enterPincode = page.locator("//p[normalize-space()='Enter Delivery Pincode']")
    this.typePincode = page.locator("//input[@placeholder='Enter pincode here']")
    this.submitPincode = page.locator("//span[normalize-space()='Submit']")
    this.clickSpecialoffers = page.locator("//a[@aria-label='Offers']")
    this.clcikSearchBox = page.locator("//div[@class='SearchPlaceholder_searchRoot__LWDXI icon-searchIcon SearchPlaceholder_icon___bJlq']")
    this.consultationImage = page.locator('//img[@title="Online Doctor Consultation & Medicines"]');
    this.clickCart = page.locator("//a[@aria-label='Cart Icon']")
    //this.VerifyText = page.locator("//p[normalize-space()='YOUR CART IS EMPTY']")
    this.clickgoto = page.locator("//a[normalize-space()='GO TO PHARMACY']")
    this.BuyMedicines = page.locator("//a[normalize-space()='Buy Medicines']")
    this.AllProducts = page.locator("//a[normalize-space()='Apollo Products']")
    this.BabyCare = page.locator("//a[@href='/shop-by-category/baby-care']")
    this.nds = page.locator("//a[normalize-space()='Nutritional Drinks & Supplements']")
    this.Womencare = page.locator("//a[normalize-space()='Women Care']")
    this.PersonalCare = page.locator("//ul[@class='MegaMenu_mmList__VtxyI']//a[contains(text(),'Personal Care')]")
    this.Ayurveda = page.locator("//a[normalize-space()='Ayurveda']")
    this.HealthDevices = page.locator("//a[@href='/shop-by-category/health-devices']")
    this.HomeEssentials = page.locator("//a[normalize-space()='Home Essentials']")
    this.healthCondition = page.locator("//a[normalize-space()='Health Condition']")
    this.FindDoctors = page.locator("//a[normalize-space()='Find Doctors']")
    this.LabTest = page.locator("//a[normalize-space()='Lab Tests']")
    this.CircleMem = page.locator("//a[normalize-space()='Circle Membership']")
    this.HealthRec = page.locator("//a[normalize-space()='Health Records']")
    this.Diabetes = page.locator("//a[normalize-space()='Diabetes Reversal']")
    this.HealthInsurrance = page.locator("//header[@id='fixedHeaderCT']//li[7]//a[1]")
    this.BuyMedicines = page.locator("//a[normalize-space()='Buy Medicines']")
    this.FindStore = page.locator("//h2[normalize-space()='Pharmacy Near Me']")
    this.consultationImage = page.locator('//img[@title="Online Doctor Consultation & Medicines"]');
    this.UploadNow = page.locator("//h2[normalize-space()='Get 15% off on Medicines']")
    this.consultationImage = page.locator('//img[@title="Online Doctor Consultation & Medicines"]');
    this.HospitalVisit = page.locator("//h2[normalize-space()='Hospital Visit']")
    this.BuyMedicines = page.locator("//a[normalize-space()='Buy Medicines']")
    this.VideoConsult = page.locator("//h2[normalize-space()='Video Consult']")
    this.BuyMedicines = page.locator("//a[normalize-space()='Buy Medicines']")
    this.LabTest = page.locator("//a[normalize-space()='Lab Tests']")
    this.BuyMedicines = page.locator("//a[normalize-space()='Buy Medicines']")
    this.ConsultDoctor = page.locator("//img[@alt='Consult Doctor']")
    this.BuyMedicines = page.locator("//a[normalize-space()='Buy Medicines']")
    this.BannerDiabetes = page.locator("//img[@alt='Diabetes Reversal']")
    this.BuyMedicines = page.locator("//a[normalize-space()='Buy Medicines']")
    this.ApolloImageD = page.locator("//a[@href='/']//img[@alt='Online Doctor Consultation & Medicines']")
    this.GetitOnGP = page.locator("//span[@class='icon-google-play-btn']//span[@class='path5']")
    this.DownloadItOnApp = page.locator("//span[contains(@class,'icon-ios-app-btn')]//span[contains(@class,'path5')]")
    this.facebook = page.locator("//a[contains(@aria-label,'Facebook')]")
    this.twitter = page.locator("//a[@aria-label='Twitter']")
    this.LinkedIn = page.locator("//span[@class='icon-Linkedin']")
    this.YouTubbe = page.locator("//span[@class='icon-youtube-icon']//span[@class='path3']")
    
  }

  // Method to visit the Apollo Pharmacy homepage
  async visitHomePage() {
    await this.page.goto('https://www.apollopharmacy.in/');
  }
  // Method to click the image for Online Doctor Consultation
  async clickConsultationImage() {
    await this.consultationImage.click();
  }
  async clickSelectAddress() {
    await this.selectAddress.click();
  }
  async clickPincode() {
    await this.enterPincode.click();
  }
  async typecode() {
    await this.typePincode.fill('600034');
  }
  async submitbut() {
    await this.submitPincode.click();
  }
  async specialoffers() {
    await this.clickSpecialoffers.click();
  }
  async SearchBox() {
    await this.clcikSearchBox.click();
  }
  async clickConsultationImage() {
    await this.consultationImage.click();
  }
  async CartLogo() {
    await this.clickCart.click();
  }
  // async CartText() {
  //   await this.VerifyText.toContainText();
  // }
  async gobacktoPharmacy() {
    await this.clickgoto.click();
  }
  async clickBuyMedicines() {
    await this.BuyMedicines.click();
  }
  async clickAllProducts() {
    await this.AllProducts.click();
  }
  async clickBabyCare() {
    await this.BabyCare.click();
  }
  async clicknds() {
    await this.nds.click();
  }
  async clickWomenCare() {
    await this.Womencare.click();
  }
  async clickPersonalcare() {
    await this.PersonalCare.click();
  }
  async clickAyurveda() {
    await this.Ayurveda.click();
  }
  async clickHealthDevices() {
    await this.HealthDevices.click();
  }
  async clickHomeEssentials() {
    await this.HomeEssentials.click();
  }
  async clickHealthCondition() {
    await this.healthCondition.click();
  }
  async clickFindDoctors() {
    await this.FindDoctors.click();
  }
  async clicklLabTests() {
    await this.LabTest.click();
  }
  async clickCircleMemb() {
    await this.CircleMem.click();
  }
  async clickHealtRecords() {
    await this.HealthRec.click();
  }
  async clickDiabR() {
    await this.Diabetes.click();
  }
  async clickHealthInsurance() {
    await this.HealthInsurrance.click();
  }
  async clickBuyMedicines() {
    await this.BuyMedicines.click();
  }
  async clickFindStore() {
    await this.FindStore.click();
  }
  async clickConsultationImage() {
    await this.consultationImage.click();
  }
  async clickUploadNow(){
    await this.UploadNow.click();
  }
  async clickConsultationImage() {
    await this.consultationImage.click();
  }
  async clickHospitalVisit(){
    await this.HospitalVisit.click();
  }
  async clickBuyMedicines() {
    await this.BuyMedicines.click();
  }
  async clickVideoConsult() {
    await this.VideoConsult.click();
  }
  async clickBuyMedicines() {
    await this.BuyMedicines.click();
  }
  async clicklLabTests() {
    await this.LabTest.click();
  }
  async clickBuyMedicines() {
    await this.BuyMedicines.click();
  }
  async clickConsultDoctor() {
    await this.ConsultDoctor.click();
  }
  async clickBuyMedicines() {
    await this.BuyMedicines.click();
  }
  async clickBannerDiabetes() {
    await this.BannerDiabetes.click();
  }
  async clickBuyMedicines() {
    await this.BuyMedicines.click();
  }
  async clickApolloImageD() {
    await this.ApolloImageD.click();
  }
  async clickGetitonGp() {
    await this.GetitOnGP.click();
  }
  async clickonDownloadItOnApp() {
    await this.DownloadItOnApp.click();
  }
  async clickonfacebook() {
    await this.facebook.click();
  }
  async clickonTwitter() {
    await this.twitter.click();
  }
  async clickonLinkedIn() {
    await this.LinkedIn.click();
  }
  async clickonYoutube() {
    await this.YouTubbe.click();
  }

  

  // Method to click the Login button
  // async clickLoginButton() {
  //   await this.loginButton.click();
  // }
}

module.exports = HomePage;
