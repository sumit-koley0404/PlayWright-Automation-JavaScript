const {test,expect}=require('@playwright/test');
const {POManager}=require('../pageObject/POManager');
const dataset=JSON.parse(JSON.stringify(require('../utils/login.json')));

for(const credentials of dataset)
{
test(`@smoke valid LogIn for ${credentials.username}`,async({page})=>
{
    const textContent = page.locator("div[class='left mt-1'] h3");
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage(); 
    await loginPage.LogIn(credentials.username,credentials.password);
    await expect(textContent).toHaveText("Automation");
});
test(`@smoke Invalid LogIn for ${credentials.username}`,async({page})=>
{

    const invalidLoginMessage =page.locator("div[aria-label='Incorrect email or password.']");
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    loginPage.LogIn(credentials.username,credentials.password);
    await expect(invalidLoginMessage).toHaveText("Incorrect email or password."); 
})
};