const {test,expect}=require('@playwright/test');
const {POManager}=require('../pageObject/POManager');
//const { LoginPage } = require('../pageObject/LogInPage');
const dataset=JSON.parse(JSON.stringify(require('../utils/login.json')));

for(const credentials of dataset)
{
test(`@smoke valid LogIn for ${credentials.username}`,async({page})=>
{
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage(); 
    await loginPage.LogIn(credentials.username,credentials.password);
    const txt = await loginPage.ValidTxtValidation();
    expect(txt).toContain("Automation");
    
});
test(`@smoke Invalid LogIn for ${credentials.username}`,async({page})=>
{
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    await loginPage.LogIn(credentials.username,credentials.password);
    const txt = await loginPage.InvalidTxtValidation();
    expect(txt).toContain("Incorrect email or password."); 
})
};