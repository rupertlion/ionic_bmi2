import { browser, by, element } from 'protractor';

export class Page {

    navigateTo(destination) {
        return browser.get(destination);
    }

    getTitle() {
        return browser.getTitle();
    }

    getPageOneTitleText() {
        return element(by.tagName('ion-title')).getText();
    }

    getWeightInput() {
        return element(by.id('lbl-0')).getText();
    }

    getHeightInput() {
        return element(by.id('lbl-1')).getText();
    }

    getCalcButton() {
        return element(by.tagName('span')).getText();
    }

    getCardContent() {
        return element(by.tagName('ion-car-content')).getText();
    }

    setInputs() {
        element(by.id('lbl-0')).sendKeys(80);
        element(by.id('lbl-1')).sendKeys(180);
    }

    clickCalculate() {
        element(by.tagName('span')).click();
    }
    
}