import HomePage from '../pageobjects/homeLoanPage';
import {assert} from 'chai';

describe('Verify Home Loan Page', () => {
  before(()=>{
    HomePage.goToHomeLoanPage();
  });

  it('Calculate Loan amount', () => {
    HomePage.applyTypeSingle.click();
    HomePage.noOfDependent.selectByVisibleText('0');
    HomePage.propertyHomeType.click();
    HomePage.income.setValue('80000');
    HomePage.otherIncome.setValue('10000');
    HomePage.livingExpense.setValue('500');
    HomePage.currentHomeLoan.setValue('0');
    HomePage.otherLoan.setValue('100');
    HomePage.others.setValue('0');
    HomePage.creditLimit.setValue('10000');
    HomePage.borrowCalculator.click();
    HomePage.borrowResult.waitForDisplayed();
    const totalAmount=HomePage.borrowResult.getText().replace('$', '');
    assert.isAbove(parseInt(totalAmount), 479000, 'Minimum should be 479000');
  });

  it('Clear Data', () => {
    HomePage.startOverButton.waitForDisplayed();
    HomePage.startOverButton.click();
    const income=HomePage.income.getText().replace('$', '');
    assert.equal(parseInt(income), 0, 'income should clear');
  });
  it('verify living expense', () => {
    const expectedError='Based on the details you\'ve entered, we\'re unable to give you an estimate '+
    'of your borrowing power with this calculator. For questions, call us on';
    HomePage.livingExpense.setValue('1');
    HomePage.borrowCalculator.click();
    HomePage.errorMessage.waitForDisplayed();
    const errorMessage=HomePage.errorMessage.getText().trim();
    assert.include(errorMessage, expectedError, 'Error message should be correct');
  });
});


