const{LoginPage}=require('./LogInPage');
const{RegistrationPage} = require('./RegistrationPage');
class POManager
{
    constructor(page)
    {
        this.page = page;
        this.logInPage = new LoginPage(this.page);
        this.registrationPage = new RegistrationPage(this.page);
    }
    getLoginPage()
    {
        return this.logInPage;
    }
    getRegistrationPage()
    {
        return this.registrationPage;
    }
}
module.exports={POManager};