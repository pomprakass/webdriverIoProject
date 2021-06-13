import Page from './page';

const SELECTROS={
  homepageSigninButton: '.login',
  signOut: '.logout',
  account: '.account',
};

class HomePage extends Page {
  constructor(baseSelector='', selectors=SELECTROS) {
    super(baseSelector, selectors);
  }
}

export default new HomePage();
