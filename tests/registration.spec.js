const {test,expect}=require('@playwright/test');
const {POManager} = require('../pageObject/POManager');
const dataset = JSON.parse(JSON.stringify(require('../utils/registration.json')));
const {custometest} = require("../utils/test-base");
for(const userdata of dataset)
{
test(`@regstn Registration with Valid ${userdata.firstname}`,async({page})=>
{
    
  const successValidation = page.locator(".headcolor");
  const poManager = new POManager(page);
  const registrationPage = poManager.getRegistrationPage();
  await registrationPage.registration(userdata.firstname,userdata.lastname,userdata.email,
      userdata.mobileno,userdata.userpassword,userdata.confirmpassword);
  await expect(successValidation).toHaveText("Account Created Successfully");
  
})}
custometest.only(`@fixture Registration With Fixture Data`, async({page,testDataForReqistration})=>
{
  const successValidation = page.locator(".headcolor");
  const poManager = new POManager(page);
  const registrationPage = poManager.getRegistrationPage();
  await registrationPage.registration(testDataForReqistration.firstname,testDataForReqistration.lastname,testDataForReqistration.email,
    testDataForReqistration.mobileno,testDataForReqistration.userpassword,testDataForReqistration.confirmpassword);
  await expect(successValidation).toHaveText("Account Created Successfully");

})
