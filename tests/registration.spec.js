const {test,expect}=require('@playwright/test');
const {POManager} = require('../pageObject/POManager');
const dataset = JSON.parse(JSON.stringify(require('../utils/registration.json')));
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