const Selenium = require("../Infra/SeleniumInfra")

class GenePage {
    constructor(selenium=Selenium) {
        this.selenium = selenium;
    }
    async validateTheTitle(urlGene, assertedText) {
        await this.selenium.elementValidation("//div[@class='css-1shmypf']/h2", "xpath")
        var text1=await this.selenium.getTextFromElement("//div[@class='css-1shmypf']/h2", "xpath")
        this.selenium.assert(text1=assertedText, "the title is equal to asserted text")
    }

    async clickOrderNow() {   
        await this.selenium.scrollToBottom() 
        await this.selenium.clickElement("//div[@data-testid='clonal-genes-card']//button", "xpath")
    }  
}

module.exports = GenePage;
