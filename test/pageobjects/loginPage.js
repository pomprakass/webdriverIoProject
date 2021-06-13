import Page from './page';

const SELECTROS={
  loginEmail: '#email',
  loginPassword: '#passwd',
  signinButton: '#SubmitLogin',
};

class LoginPage extends Page {
  constructor(baseSelector='', selectors=SELECTROS) {
    super(baseSelector, selectors);
  }
}

export default new LoginPage();
