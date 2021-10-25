const chai = require('chai');

const HomePage = require('../pageobjects/home.page');
const { url, expectedOutput } = require('../constants');

const { assert, expect } = chai;

describe('Testing volvo cars home page', () => {
    it('Open and click Accept button to accept cookie', async () => {
        await HomePage.open(url);
        await browser.pause(5000);
        HomePage.clickAcceptCookie();

        const actualTitle = await browser.getTitle();
        const actualUrl = await browser.getUrl();

        assert.strictEqual(actualTitle, expectedOutput.title); 
        assert.strictEqual(actualUrl, expectedOutput.url);
    });

    it('User selects menu button', async () => {
        await HomePage.clickMenuButton();
        const actualMenuText = await HomePage.getMenuText();

        expect(actualMenuText).equal(expectedOutput.menuButton);
    });

    it('User when selects electric type in menu', async () => {
        await HomePage.clickElectricButton();
        const actualElectricText = await HomePage.getElectricButtonText();

        expect(actualElectricText).equal(expectedOutput.electric);
    });

    it('User when selects hybrids type in menu', async () => {
        await HomePage.clickHybridsButton();
        const actualHybridsText = await HomePage.getHybridsButtonText();

        expect(actualHybridsText).equal(expectedOutput.hybrids);
    });

    it('User when selects mild hybrids type in menu', async () => {
        await HomePage.clickMildHybridsButton();
        const actualMildHybridsText = await HomePage.getMildHybridsButtonText();

        expect(actualMildHybridsText).equal(expectedOutput.mildHybrids);
    });
});

describe('visual regression', () => {
    it('test the screen when eletric type is selected in menu', async () => {
        await HomePage.clickElectricButton();

        await browser.saveScreen('electric');
        expect(await browser.checkScreen('electric')).within(0, 10);
    });
});