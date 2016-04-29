(function() {
  var activityFormControlller = function(activityDataService) {

    activityDataService.getActivityTypes()
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

  angular.module('cz.angular.simpleDevstack.activity.form', [
      'ui.bootstrap',
      'ngMessages'
    ])
    .component('activityForm', activityFormComponent);
})();
