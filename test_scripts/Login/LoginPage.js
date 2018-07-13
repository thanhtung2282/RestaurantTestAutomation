const { expect  } = require('chai');
const Base = require('../../Base');
const TXT_EMAIL = '#email';
const TXT_PASSWORD = '#password';
const BTN_SUBMIT = '[type="submit"]';
const VALID_EMAIL = '#validEmail';
const VALID_PASSWORD = '#validPassword';
const WRONG_INFO = '#alertWrongInfo';
const SUCCESS = '#nameRestaurant';

class LoginPage extends Base{
    
    inputEmail(email){
        $(TXT_EMAIL).setValue(email);
        return this;
    }
    inputPassword(password){
        $(TXT_PASSWORD).setValue(password);
        return this;
    }
    buttonSubmit(){
        $(BTN_SUBMIT).click();
        return this;
    }
    getTextValidEmail(){ return $(VALID_EMAIL).getText(); }
    
    getTextValidPassword(){ return $(VALID_PASSWORD).getText(); }

    getTextWrongInfo(){ return $(WRONG_INFO).getText(); }

    getSuccessAfterSignin(){ return $(SUCCESS).getText(); }

    verifyValidEmail(){
        let text = this.getTextValidEmail();
        let expectedText = 'Email Không Hợp Lệ';
        expect(text).to.equal(expectedText,'ERR: VALID EMAIL TEXT WRONG');
    }
    verifyValidPassword(){
        let text = this.getTextValidPassword();
        let expectedText = 'Password Không Hợp Lệ';
        expect(text).to.equal(expectedText,'ERR: VALID PASSWORD TEXT WRONG');
    }
    verifyWrongInfo(){
        let text = this.getTextWrongInfo();
        let expectedText = '×\nLỗi! Sai Thông Tin Đăng Nhập';
        expect(text).to.equal(expectedText,'ERR: WRONG INFO SIGIN');
    }
    verifySuccess(){   
        let text = this.getSuccessAfterSignin();
        let expectedText = 'NHÀ HÀNG 3 MIỀN';
        expect(text).to.equal(expectedText,'ERR: WRONG NAME RESTAURANT AFTER SIGNIN SUCCESS');
        let token1 =browser.localStorage('GET', 'token');
        expect(token1.value).to.not.null
    }
}
module.exports = new LoginPage();