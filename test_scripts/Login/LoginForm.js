const LoginPage = require('./LoginPage');
const LoginPageData = require('../../test_data/LoginPage.json');
describe('LOGIN PAGE TEST', () => {
    let url = 'http://localhost:4200/signin';
    before('OPEN PAGE FOR TEST', () => {
        LoginPage.openPage(url);
    });
    beforeEach('REFRESH AFTER EACH OF TEST CASE', () => {
        browser.refresh();
    });
    it('CANNOT SIGNIN WITH VALID EMAIL', () => {
        LoginPage
            .inputEmail(LoginPageData.incorrectWithValidEmail.email)
            .inputPassword(LoginPageData.incorrectWithValidEmail.password)
            .verifyValidEmail();
    });
    it('CANNOT SIGNIN WITH VALID PASSWORD', () => {
        LoginPage
            .inputEmail(LoginPageData.incorrectWithValidPassword.email)
            .inputPassword(LoginPageData.incorrectWithValidPassword.password)
            .inputEmail(LoginPageData.incorrectWithValidPassword.email)            
            .verifyValidPassword();
    });
    it('CANNOT SIGNIN WITH WRONG EMAIL OR PASSWORD', () => {
        LoginPage
            .inputEmail(LoginPageData.incorrectCredential.email)
            .inputPassword(LoginPageData.incorrectCredential.password)         
            .buttonSubmit()
            .verifyWrongInfo()
            
    });
    it('CAN SIGNIN', () => {
        LoginPage
            .inputEmail(LoginPageData.correctCredential.email)
            .inputPassword(LoginPageData.correctCredential.password)         
            .buttonSubmit()
            .verifySuccess()
    });
});