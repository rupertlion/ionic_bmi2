import { CalculatorPage } from "./calculator";
import { TestBed, async, inject } from "@angular/core/testing";
import { IonicModule, Platform, NavController, NavParams } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { PlatformMock, StatusBarMock, SplashScreenMock, NavControllerMock, NavParamsMock, CalculatorPageMock } from "ionic-mocks";

describe("CalculatorPage", () => {
  let calculatorpage;
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
        { provide: CalculatorPage, useFactory: () => CalculatorPageMock.instance() }


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

    it("calculate function should call calculator calculateBMI function", inject(
        [CalculatorPage],
        person => {
            calculatorpage.user = { weight: 80, height: 180 };
            spyOn(person, "calculateBMI").and.returnValue("You are Normal");

            calculatorpage.calculateBMI();

            expect(person.calculateBMI).toHaveBeenCalled();
            expect(person.calculateBMI).toHaveBeenCalledWith(80);
            expect(person.height).toEqual(80);
            expect(person.weight).toEqual(180);
        }
    ));
});