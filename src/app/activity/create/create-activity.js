(function() {
  'use strict';

  var CreateActivityController = function($state, Activity, activityTypesService, ngToast) {

    activityTypesService.getActivityTypes()
      .then(function(types) {
        this.types = types;
      }.bind(this));

    this.activity = {
      date: new Date(),
      count: 0
    };

    this.save = function(form) {

      // TODO checkValidity, save, show message and redirect

      function afterSave() {
        ngToast.success('Activity created!');
        $state.go('app.activity');
      }
    };

  };

  angular.module('cz.angular.pushups.activity.create',
    [
      'cz.angular.pushups.activity.form'
    ])
    .controller('CreateActivityController', CreateActivityController);

})();
