const LoginPage = require("../Pages/LoginPage");
const BasePage = require("../BasePage/BasePage");
const HomePage = require("../Pages/HomePage");
const GenePage = require("../Pages/GenePage");


class LoginTest {
    constructor() {
        this.testSelenium = new BasePage().selenium
        this.loginPage = new LoginPage(this.testSelenium)
        this.homePage = new HomePage(this.testSelenium)
        this.genePage = new GenePage(this.testSelenium)
    }
    async loginTest(uName, uPasswords) {
        await lTest.loginPage.navigateToHomePage();
        await lTest.loginPage.eneterName(uName);
        await lTest.loginPage.enterPassword(uPasswords);
        await lTest.loginPage.clickEnter()
        
        await lTest.homePage.clickOnGenesIcon();
        await lTest.homePage.enterProjectName("Project1");
        await lTest.homePage.clickNewProjectBtn();

        await lTest.genePage.validateTheTitle("https://ecommerce.twistdna.com/app/gene", "Select Gene Type:");
        await lTest.genePage.clickOrderNow();
    }

}
const lTest = new LoginTest()
lTest.loginTest("nbamram+test1@twistbioscience.com", "!2qwaszx");
