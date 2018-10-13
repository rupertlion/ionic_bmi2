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

    it("should create the home page", () => {
        expect(calculatorpage).toBeTruthy();
        expect(calculatorpage instanceof CalculatorPage).toEqual(true);
    });

    it('should have calculate function', () => {
        spyOn(calculatorpage, 'calculateBMI');

        calculatorpage.calculateBMI()

        expect(calculatorpage.calculateBMI).toHaveBeenCalled();
    });

    it("calculate function should call calculator calculateBMI function", () => inject(
        [CalculatorPage],
        inputs => {        
            calculatorpage.weight = 80
            calculatorpage.height = 180
            spyOn(inputs, "calculateBMI").and.returnValue("Normal");

            calculatorpage.calculateBMI();
            fixture.detectChanges();
            expect(calculatorpage.calculateBMI).toHaveBeenCalled();
            expect(calculatorpage.height).toEqual(180);
            expect(calculatorpage.weight).toEqual(80);
            expect(calculatorpage.calculateBMI).toHaveBeenCalledWith(24.69)
        }
    ));

    it("calculate function should return setBMImessage function", () => inject(
        [CalculatorPage],
        inputs => {        
            calculatorpage.weight = 80
            calculatorpage.height = 180
            spyOn(inputs, "setBMIMessage").and.returnValue(24.69);

            calculatorpage.setBMIMessage();
            fixture.detectChanges();
            expect(calculatorpage.setBMIMessage).toHaveBeenCalled();
            expect(calculatorpage.height).toEqual(180);
            expect(calculatorpage.weight).toEqual(80);
            expect(calculatorpage.setBMIMessage).toHaveBeenCalledWith(24.69)
        }
    ));

    it('should calculate ', () => {
        calculatorpage.weight = 80;
        calculatorpage.height = 180;
        let result = calculatorpage.calculateBMI();
        expect(result).toEqual("Normal");
    });
});