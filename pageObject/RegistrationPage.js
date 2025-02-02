class RegistrationPage
{
    constructor(page)
    {
       this.page = page;
       this.registerBtn = page.locator(".btn1");
       this.firstName = page.locator("#firstName");
       this.lastName = page.locator("#lastName");
       this.email = page.locator("#userEmail");
       this.mobileNo = page.locator("#userMobile");
       this.gender = page.locator("input[value='Male']");
       this.userPassword = page.locator("#userPassword");
       this.confirmPassword = page.locator("#confirmPassword");
       this.checkBox = page.locator(".col-md-1");
       this.submit = page.locator("#login");
    }
    async registration(firstname,lastname,email,mobileno,userpassword,confirmpassword)
    {
    
    await this.page.goto("https://rahulshettyacademy.com/client/");
    await this.registerBtn.click();
    await this.firstName.fill(firstname);
    await this.lastName.fill(lastname);
    await this.email.fill(email);
    await this.mobileNo.fill(mobileno);
    await this.userPassword.fill(userpassword);
    await this.confirmPassword.fill(confirmpassword);
    await this.page.selectOption(".custom-select","Engineer");
    await this.gender.click();
    await this.checkBox.click();
      // Scroll to a specific position (e.g., 0px horizontally and 500px vertically)
    await this.page.evaluate(() => 
    {
    window.scrollTo(0, 200);
    });

   // Optional: Wait to see the scroll effect
    await this.page.waitForTimeout(1000);
    await this.submit.click();
    }
    
}
module.exports={RegistrationPage};