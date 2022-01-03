const Selenium = require("../Infra/SeleniumInfra")

class LoginPage {
    constructor(selenium=Selenium) {
        this.selenium = selenium;
    }

    async navigateToHomePage() {
        await this.selenium.getURL("https://ecommerce.twistdna.com/app");
    }

    async eneterName(userName) {
        var el=await this.selenium.findElementBy("//input[@id='user_email']", "xpath");
        await el.sendKeys(userName)
    }
    
    async enterPassword(passW){
        var el=await this.selenium.findElementBy("//input[@id='user_password']", "xpath");
        await el.sendKeys(passW)
    }

    async clickEnter() {
        await this.selenium.clickElement("//label[.='Log in']/parent::button", "xpath")
    }
}

module.exports = LoginPage;