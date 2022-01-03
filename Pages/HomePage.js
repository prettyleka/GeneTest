const Selenium = require("../Infra/SeleniumInfra")

class HomePage {
    constructor(selenium=Selenium) {
        this.selenium = selenium;
    }

    async clickOnGenesIcon() {
        await this.selenium.elementValidation('//label[text()="Genes"]/parent::div[@class="twist-app-button-card twist-app-button-card-front"]', "xpath")
        await this.selenium.clickElement('//label[text()="Genes"]/parent::div[@class="twist-app-button-card twist-app-button-card-front"]', "xpath")
    }   

    async enterProjectName(projName) {
        var el=await this.selenium.findElementBy(" //div[@data-automation-id='gene_automation_id']//input[@class='input-component']", "xpath");
        await el.sendKeys(projName)
    }

    async clickNewProjectBtn() {
        await this.selenium.clickElement("//button[@data-automation-id='gene']", "xpath")
    }
    
}

module.exports = HomePage;