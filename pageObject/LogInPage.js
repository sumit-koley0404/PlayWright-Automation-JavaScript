class LoginPage{
    constructor(page)
    {
        this.page =page;
        this.userName = page.locator("#userEmail");
        this.passWord = page.locator("#userPassword");
        this.logInBtn = page.locator("#login");
    }
    async LogIn(username,password)
    {
        await this.page.goto("https://rahulshettyacademy.com/client");
        await this.userName.fill(username);
        await this.passWord.fill(password);
        await this.logInBtn.click();
    }
}module.exports={LoginPage};