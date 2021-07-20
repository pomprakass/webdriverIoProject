import Page from './page';

const SELECTROS={
  anzSearch: '#searchinput',
  applyTypeSingle: '[for="application_type_single"]',
  noOfDependent: '[title="Number of dependants"]',
  propertyHomeType: '[for="borrow_type_home"]',
  income: '[aria-labelledby="q2q1"]',
  otherIncome: '[aria-labelledby="q2q2"]',
  livingExpense: '#expenses',
  currentHomeLoan: '#homeloans',
  otherLoan: '#otherloans',
  others: '[aria-labelledby="q3q4"]',
  creditLimit: '#credit',
  borrowCalculator: '#btnBorrowCalculater',
  borrowResult: '#borrowResultTextAmount',
  startOverButton: '.borrow__result .icon_restart',
  errorMessage: '.borrow__error__text',

};

class HomeLoanPage extends Page {
  constructor(baseSelector='', selectors=SELECTROS) {
    super(baseSelector, selectors);
  }
  goToHomeLoanPage(url=browser.config.anzUrl) {
    browser.url(url);
    browser.anzSearch.waitForDisplayed();
  }
}

export default new HomeLoanPage();
