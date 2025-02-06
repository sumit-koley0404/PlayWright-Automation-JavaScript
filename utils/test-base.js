const base =require('@playwright/test');

exports.custometest = base.test.extend({
    testDataForReqistration:{
        firstname:"Test",
        lastname:"Test",
        email:"test1@mailinator",
        mobileno:"9999999999",
        userpassword:"Test@123456",
        confirmpassword:"Test@123456"

    }
})