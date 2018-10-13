import { CalculatorPage } from "./calculator";
import { NavController, NavParams } from 'ionic-angular';

describe("CalculatorPage", () => {
    let calculatorPage: CalculatorPage;

    beforeEach(() => {
        calculatorPage = new CalculatorPage(NavController, NavParams);
    });

    it('should create the calculator provider', () => {
        expect(calculatorPage).toBeTruthy();
        expect(calculatorPage instanceof CalculatorPage).toEqual(true);
    });

    it('assess should return Normal', () => {
        calculatorPage.weight = 80;
        calculatorPage.height = 180;
        expect(calculatorPage.calculateBMI()).toBeDefined();
        expect(calculatorPage.calculateBMI()).toEqual("Normal");
    });

    it('assess should return Underweight', () => {
        calculatorPage.weight = 55;
        calculatorPage.height = 180;
        expect(calculatorPage.calculateBMI()).toBeDefined();
        expect(calculatorPage.calculateBMI()).toEqual("Underweight");
    });

    it('assess should return Overweight', () => {
        calculatorPage.weight = 83;
        calculatorPage.height = 180;
        expect(calculatorPage.calculateBMI()).toBeDefined();
        expect(calculatorPage.calculateBMI()).toEqual("Overweight");
    });

    it('assess should return Obese', () => {
        calculatorPage.weight = 100;
        calculatorPage.height = 180;
        expect(calculatorPage.calculateBMI()).toBeDefined();
        expect(calculatorPage.calculateBMI()).toEqual("Obese");
    });
});