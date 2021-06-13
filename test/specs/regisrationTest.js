import HomePage from '../pageobjects/homePage';
import RegisterPage from '../pageobjects/registrationPage';
import {assert} from 'chai';

describe('Registration to application', () => {
  let mailId;
  let registerStatus= false;
  before(()=>{
    HomePage.open();
    HomePage.homepageSigninButton.waitForDisplayed();
    HomePage.homepageSigninButton.click();
  });

  after(()=>{
    if (registerStatus) {
      RegisterPage.updateMailId(mailId);
    }
  });
  it('Should register with valid Data', () => {
    RegisterPage.registerEmail.waitForDisplayed();
    mailId=RegisterPage.getRegisterMail();
    RegisterPage.registerEmail.setValue(mailId);
    RegisterPage.createButton.click();
    RegisterPage.form.waitForDisplayed();
    RegisterPage.fillPersonalDetails();
    RegisterPage.fillAddress();
    RegisterPage.registerButton.click();
    HomePage.signOut.waitForDisplayed();
    registerStatus=HomePage.signOut.isDisplayed();
    assert.isTrue(registerStatus, 'Registation should complete');
  });
});


