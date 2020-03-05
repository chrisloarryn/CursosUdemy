import {AuthappPage} from './app.po';

describe('authapp App', () => {
    let page: AuthappPage;

    beforeEach(() => {
        page = new AuthappPage();
    });

    it('should display message saying app works', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});
