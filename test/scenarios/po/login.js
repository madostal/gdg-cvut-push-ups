var LoginPO = function() {
  this.name = element(by.model('vm.credentials.name'));
  this.pass = element(by.model('vm.credentials.password'));

  this.go = function() {
    browser.get('index.html');
  };

  this.login = function(user, pass) {
    this.name.clear().sendKeys(user);
    this.pass.clear().sendKeys(pass);

    this.pass.sendKeys(protractor.Key.ENTER);
  };
};

module.exports = LoginPO;