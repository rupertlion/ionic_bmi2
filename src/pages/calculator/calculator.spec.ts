import { CalculatorPage } from "./calculator";
import { TestBed, async, inject } from "@angular/core/testing";
import { IonicModule, Platform, NavController, NavParams } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { PlatformMock, StatusBarMock, SplashScreenMock, NavControllerMock, NavParamsMock } from "ionic-mocks";

describe("CalculatorPage", () => {
  let calculatorpage: CalculatorPage;
  let fixture

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
        // { provide: CalculatorPage, useFactory: () => CalculatorPageMock.instance() }
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

        expect(this.calculateBMI).toHaveBeenCalled();
    });

    it("calculate function should call calculator calculateBMI function", () => {

        this.weight = 80
        this.height = 180
        
        this.calculateBMI();

        // expect(calculatorpage.calculateBMI).toHaveBeenCalled();
        // expect(calculatorpage.height).toEqual(180);
        // expect(calculatorpage.weight).toEqual(80);
        expect(this.bmiMessage).toEqual("You are Normal")
        });

        // it("calculate function should return correct BMI value and message", () => {
        // // calculatorpage.calculateBMI = { weight: 80, height: 180 };
        // // spyOn(calculatorpage, "calculateBMI").and.returnValue("You are Normal");

        // calculatorpage.calculateBMI({ weight: 80, height: 180 });

        // expect(calculatorpage.bmiValue).toEqual(24.69);
        // expect(calculatorpage.calculateBMI).toEqual("You are Normal");
        // });
});