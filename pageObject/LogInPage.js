class LoginPage{
    constructor(page)
    {
        this.page =page;
        this.userName = page.locator("#userEmail");
        this.passWord = page.locator("#userPassword");
        this.logInBtn = page.locator("#login");
        this.validTextContent = page.locator("div[class='left mt-1'] h3");
        this.invalidLoginContent =page.locator("div[aria-label='Incorrect email or password.']");

    }
    async LogIn(username,password)
    {
        await this.page.goto("https://rahulshettyacademy.com/client");
        await this.userName.fill(username);
        await this.passWord.fill(password);
        await this.logInBtn.click();
        await this.page.waitForLoadState('networkidle');
    }
    async ValidTxtValidation()
    {
        return await this.validTextContent.textContent();
    }
    async InvalidTxtValidation()
    {
        return await this.invalidLoginContent.textContent();
    }
}module.exports={LoginPage};