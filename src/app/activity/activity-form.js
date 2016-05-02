(function() {
  var activityFormController = function(activityTypesService) {

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

  angular.module('cz.angular.pushups.activity.form',
    [
      'ui.bootstrap',
      'cz.angular.common.validation'
    ])
    .component('activityForm', {
      bindings: {
        activity: '=',
        onSave: '&'
      },

      controller: activityFormController,
      controllerAs: 'vm',
      templateUrl: 'app/activity/activity-form.html'
    });
})();
