const fs=require('fs');

export default class Page {
  constructor(pageObjectSelector, pageSelector) {
    if (typeof pageObjectSelector !== 'string') {
      throw new Error('Page object selector need to be string');
    }
    if (pageObjectSelector) {
      this.element=this._getElement(pageObjectSelector);
    }
    this.selector=pageObjectSelector;
    this._generateGetters(pageSelector);
    this.testData = this.getTestData();
  }
  /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
  open(path = '') {
    return browser.url(`${browser.config.baseUrl}/${path}`);
  }

  /**
   * get wdio  element from selector
   * @param {*} selector selector to get wdio element
   * @returns element
   */
  _getElement(selector) {
    if (!selector || typeof selector !== 'string') {
      throw new Error('selector needs to be string');
    }
    const baseSelector=this.selector;
    return baseSelector?browser.$(`${baseSelector} ${selector}`):browser.$(selector);
  }

  /**
   * Generate getters for every selectors
   * @param {*} selectors selectors to generate getters
   * @returns getters
   */
  _generateGetters(selectors) {
    if (!selectors) {
      return;
    }
    Object.keys(selectors).forEach((key)=>{
      if (this[key]) return;
      const isDynamic= typeof selectors[key] === 'function';
      const getter = isDynamic?{
        value: (...args) =>{
          const selector =selectors[key](...args);
          if (typeof selector === 'string') return this._getElement(selector);
          return undefined;
        },
      }:{
        get: ()=>{
          return this._getElement(selectors[key]);
        }
      };
      Object.defineProperty(this, key, getter);
    });
  }

  /**
   * Updating email to reuse in test
   * @param {*} mailId
   */
  updateMailId(mailId) {
    this.testData.email = mailId;
    fs.writeFileSync('./test/testData/basicData.json', JSON.stringify(this.testData));
  }

  getTestData() {
    const data=fs.readFileSync('./test/testData/basicData.json', 'utf8');
    const testDataSet=JSON.parse(data);
    return testDataSet;
  }
}
