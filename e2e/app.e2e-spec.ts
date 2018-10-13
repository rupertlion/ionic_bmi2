import { Page } from './app.po';

describe('App', () => {
    let page: Page;

    beforeEach(() => {
        page = new Page();
    });

    describe('default screen', () => {
        beforeEach(() => {
        page.navigateTo('/');
        });

        it('should have a title saying calculator', () => {
            page.getPageOneTitleText().then(title => {
            expect(title).toEqual('calculator');
            });
        });

        it('should have an input labelled Weight \(kg)', () => {
            page.getWeightInput().then(weightinput => {
            expect(weightinput).toEqual('Weight \(kg)');
            });
        });

        it('should have an input labelled Height \(cm)', () => {
            page.getHeightInput().then(heightinput => {
            expect(heightinput).toEqual('Height \(cm)');
            });
        });

        it('should have a button labelled Calculate', () => {
            page.getCalcButton().then(calcbutton => {
            expect(calcbutton).toEqual('Calculator');
            });
        });
    })
});