var ActivityFormPO = function() {
  this.count = element(by.model('vm.activity.count'));
  this.saveButton = element(by.css('button[type="submit"]'));

  this.go = function() {
    browser.setLocation('/activity/create');
  };

  this.setActivity = function(activity) {
    element(by.model('vm.activity.type')).element(by.cssContainingText('option', activity)).click();
    browser.waitForAngular();
  };

  this.setCount = function(count) {
    this.count.clear().sendKeys(count);
  };

  this.save = function() {
    this.saveButton.click();
  };
};

module.exports = ActivityFormPO;