const { selectors } = require('../constants');
/**
 * page containing specific selectors and methods for a specific page
 */
class HomePage {
    /**
     * define selectors using getter methods
     */

    get getElectric () { return $(selectors.electric) }
    get getElectricDiv () { return $(selectors.electricDiv) }
    get getHybrids () { return $(selectors.hybrids) }
    get getHybridsDiv () { return $(selectors.hybridsDiv) }
    get getMildHybrids () { return $(selectors.mildHybrids) }
    get getMildHybridsDiv () { return $(selectors.mildHybridsDiv) }
    get acceptCookie () { return $(selectors.acceptButton) }
    get carsMenuButton () { return $(selectors.carsMenu) }

    /**
     * a method to encapsule automation code to interact with the page
     */
    async open (page) {
        browser.url(page);
        browser.maximizeWindow();
    }

    clickAcceptCookie() {
        const accept = this.acceptCookie;
        accept.click();
    }

    async clickMenuButton() {
        const carsMenu = this.carsMenuButton;
        await carsMenu.waitForDisplayed();
        carsMenu.click();
    }

    async getMenuText() {
        return this.carsMenuButton.getText();
    }

    async clickElectricButton() {
        const electricButton = this.getElectric;
        await electricButton.waitForDisplayed();
        electricButton.click();
    }

    async getElectricButtonText() {
        return this.getElectricDiv.getText();
    }

    async clickHybridsButton() {
        const hybridsButton = this.getHybrids;
        await hybridsButton.waitForDisplayed();
        hybridsButton.click();
    }

    async getHybridsButtonText() {
        return this.getHybridsDiv.getText();
    }

    async clickMildHybridsButton() {
        const mildHybridsButton = this.getMildHybrids;
        await mildHybridsButton.waitForDisplayed();
        mildHybridsButton.click();
    }

    async getMildHybridsButtonText() {
        return this.getMildHybridsDiv.getText();
    }
}

module.exports = new HomePage();