import HomePage from '../pageobjects/homePage';
import LoginPage from '../pageobjects/loginPage';
import {assert} from 'chai';

describe('Verify login and logout', () => {
  before(()=>{
    HomePage.open();
    HomePage.homepageSigninButton.waitForDisplayed();
    HomePage.homepageSigninButton.click();
  });

  it('Verify login', () => {
    LoginPage.loginEmail.setValue(LoginPage.testData.email);
    LoginPage.loginPassword.setValue(LoginPage.testData.password);
    LoginPage.signinButton.click();
    HomePage.signOut.waitForDisplayed();
    assert.isTrue(HomePage.signOut.isDisplayed(), 'Login should sucess');
  });

  it('Verify user Details', () => {
    HomePage.account.waitForDisplayed();
    const accountDetails = HomePage.account.getText();
    const expectedData = `${LoginPage.testData.firstName} ${LoginPage.testData.lastName}`;
    assert.equal(accountDetails, expectedData, 'User name should match');
  });

  it('Verify logout', () => {
    HomePage.signOut.waitForDisplayed();
    HomePage.signOut.click();
    HomePage.homepageSigninButton.waitForDisplayed();
    assert.isTrue(HomePage.homepageSigninButton.isDisplayed(), 'Logout should sucess');
  });
});


