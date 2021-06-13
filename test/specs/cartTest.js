import HomePage from '../pageobjects/homePage';
import LoginPage from '../pageobjects/loginPage';
import CartPage from '../pageobjects/CartPage';
import {assert} from 'chai';

describe('Verify Cart', () => {
  let productPrice;
  before(()=>{
    HomePage.open();
    HomePage.homepageSigninButton.waitForDisplayed();
    HomePage.homepageSigninButton.click();
    LoginPage.loginEmail.setValue(LoginPage.testData.email);
    LoginPage.loginPassword.setValue(LoginPage.testData.password);
    LoginPage.signinButton.click();
    HomePage.signOut.waitForDisplayed();
  });

  after(()=>{
    CartPage.clearCart();
  });

  it('Add product to cart', () => {
    CartPage.tShirtMenu.waitForDisplayed();
    CartPage.tShirtMenu.click();
    CartPage.productImageBlock.waitForDisplayed();
    CartPage.productImageBlock.scrollIntoView();
    productPrice=CartPage.productPrice.getText();
    CartPage.priceBlock.moveTo();
    CartPage.addToCartButton.waitForDisplayed();
    CartPage.addToCartButton.click();
    CartPage.cartConfirmText.waitForDisplayed();
    const confirmText = CartPage.cartConfirmText.getText().trim();
    assert.equal(confirmText, 'There is 1 item in your cart.', 'Product should add to cart');
  });

  it('Verify Cart Price', () => {
    CartPage.cartConfirmText.waitForDisplayed();
    CartPage.cartProceedCheckout.click();
    CartPage.deliveryAddress.waitForDisplayed();
    const getPrice=CartPage.cartUnitPrice.getText();
    assert.equal(getPrice, productPrice, 'Product Price should match');
  });

  it('Verify checkout flow', () => {
    CartPage.proceedCheckout.waitForDisplayed();
    CartPage.proceedCheckout.click();
    CartPage.processAddress.waitForDisplayed();
    CartPage.processAddress.click();
    CartPage.processShipping.waitForDisplayed();
    CartPage.TCCheckBox.click();
    CartPage.processShipping.click();
    CartPage.paymentList.waitForDisplayed();
    assert.isTrue(CartPage.paymentList.isDisplayed(), 'Payment methods should display');
  });
});


