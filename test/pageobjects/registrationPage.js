import Page from './page';

const SELECTROS = {
  registerEmail: '#email_create',
  createButton: '#SubmitCreate',
  form: '#account-creation_form',
  mr: '#id_gender1',
  mrs: '#id_gender2',
  firstName: '#customer_firstname',
  lastName: '#customer_lastname',
  password: '#passwd',
  days: '#days',
  month: '#months',
  year: '#years',
  adress: '#address1',
  city: '#city',
  state: '#id_state',
  postcode: '#postcode',
  mobile: '#phone_mobile',
  registerButton: '#submitAccount'

};

class RegisterPage extends Page {
  constructor(baseSelector='', selectors=SELECTROS) {
    super(baseSelector, selectors);
  }

  getRegisterMail() {
    const randomNumber=Math.floor((Math.random() * 1000));
    const mailId=`${this.testData.userName}+${randomNumber}@${this.testData.domain}`;
    return mailId;
  }

  fillPersonalDetails() {
    if (this.testData.title === 'mr') {
      this.mr.click();
    } else {
      this.mrs.click();
    }
    this.firstName.setValue(this.testData.firstName);
    this.lastName.setValue(this.testData.lastName);
    this.password.setValue(this.testData.password);
    this.days.selectByAttribute('value', this.testData.date);
    this.month.selectByAttribute('value', this.testData.month);
    this.year.selectByAttribute('value', this.testData.year);
  }

  fillAddress() {
    this.adress.setValue(this.testData.address);
    this.city.setValue(this.testData.city);
    this.state.selectByVisibleText(this.testData.state);
    this.postcode.setValue(this.testData.postcode);
    this.mobile.setValue(this.testData.mobile);
  }
}

export default new RegisterPage();
