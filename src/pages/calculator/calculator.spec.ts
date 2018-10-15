import { CalculatorPage } from "./calculator";
import { TestBed, async, inject } from "@angular/core/testing";
import { IonicModule, Platform, NavController, NavParams } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { PlatformMock, StatusBarMock, SplashScreenMock, NavControllerMock, NavParamsMock } from "ionic-mocks";

describe("CalculatorPage", () => {
    let calculatorpage;
    let fixture;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [
            CalculatorPage
        ],
        imports: [IonicModule.forRoot(CalculatorPage)],
        providers: [
        { provide: Platform, useFactory: () => PlatformMock.instance() },
        { provide: StatusBar, useFactory: () => StatusBarMock.instance() },
        { provide: SplashScreen, useFactory: () => SplashScreenMock.instance() },
        { provide: NavController, useFactory: () => NavControllerMock.instance() },
        { provide: NavParams, useFactory: () => NavParamsMock.instance() },
        ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CalculatorPage);
        calculatorpage = fixture.componentInstance;
    });

    it('assess should return Normal', () => {
        calculatorpage.weight = 80;
        calculatorpage.height = 180;
        calculatorpage.calculateBMI()
        // expect(calculatorpage.calculateBMI).toBeDefined();
        expect(calculatorpage.bmiMessage).toEqual("Normal");
    });

    it('assess should return Underweight', () => {
        calculatorpage.weight = 55;
        calculatorpage.height = 180;
        calculatorpage.calculateBMI()
        // expect(calculatorpage.calculateBMI).toBeDefined();
        expect(calculatorpage.bmiMessage).toEqual("Underweight");
    });

    it('assess should return Overweight', () => {
        calculatorpage.weight = 83;
        calculatorpage.height = 180;
        calculatorpage.calculateBMI()
        // expect(calculatorpage.calculateBMI).toBeDefined();
        expect(calculatorpage.bmiMessage).toEqual("Overweight");
    });

    it('assess should return Obese', () => {
        calculatorpage.weight = 130;
        calculatorpage.height = 180;
        calculatorpage.calculateBMI()
        // expect(calculatorpage.calculateBMI).toBeDefined();
        expect(calculatorpage.bmiMessage).toEqual("Obese");
    });
});