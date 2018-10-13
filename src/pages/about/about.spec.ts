import { AboutPage } from "./about";
import { TestBed, async, inject } from "@angular/core/testing";
import { IonicModule, Platform, NavController, NavParams } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { PlatformMock, StatusBarMock, SplashScreenMock, NavControllerMock, NavParamsMock } from "ionic-mocks";

describe("AboutPage", () => {
    let aboutpage;
    let fixture;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [
            AboutPage
        ],
        imports: [IonicModule.forRoot(AboutPage)],
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
        fixture = TestBed.createComponent(AboutPage);
        aboutpage = fixture.componentInstance;
    });

    it("should create the home page", () => {
        expect(aboutpage).toBeTruthy();
        expect(aboutpage instanceof AboutPage).toEqual(true);
    });

})