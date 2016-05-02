(function() {
  'use strict';

  var activityFormControlller = function(activityTypesService) {

    activityTypesService.getActivityTypes()
      .then(function(types) {
        this.types = types;
      }.bind(this));

    this.save = function(form) {
      if (form.$invalid) {
        return;
      }

      this.onSave({activity: this.activity});
    };
  };

  var activityFormComponent = {
    bindings: {
      activity: '=',
      onSave: '&'
    },

    controller: activityFormControlller,
    controllerAs: 'vm',
    templateUrl: 'app/activity/activity-form.html'
  };

  angular.module('cz.angular.pushups.activity.form',
    [
      'ui.bootstrap',
      'cz.angular.common.validation'
    ])
    .component('activityForm', activityFormComponent);
})();
