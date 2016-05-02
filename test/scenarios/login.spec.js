'use strict';

var LoginPO = require('./po/login');
var ActivityFormPO = require('./po/activity-form');
var ActivityListPO = require('./po/activity-list');

describe('When user login', function() {

  beforeAll(function() {
    var login = new LoginPO();
    login.go();
    login.login('user43', 'pass');
  });

  it('it should go to dashboard', function() {
    var header = element(by.tagName('h1'));
    expect(header.getText()).toBe('Dashboard');
  });

  describe('and created new activity', function() {

    var COUNT = Math.ceil(Math.random() * 10000).toFixed();
    var TYPE = 'Squats';

    beforeAll(function() {
      this.activityForm = new ActivityFormPO();
      this.activityForm.go();

      this.activityForm.setCount(COUNT);
      this.activityForm.setActivity(TYPE);
      this.activityForm.save();

      this.list = new ActivityListPO();
    });

    it('should go to the list', function() {
      var header = element(by.tagName('h1'));
      expect(header.getText()).toBe('Activities log');
    });

    it('should be in the list', function() {
      var row = this.list.getRow(0);

      expect(row.getCount()).toBe(COUNT);
      expect(row.getType()).toBe(TYPE);
    });
  });
});
