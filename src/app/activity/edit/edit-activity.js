(function() {

  var EditActivityController = function($state, activity, activityService, ngToast) {

    this.activity = activity;

    this.save = function(activity) {
      activityService.save(activity)
        .then(function() {
          ngToast.success('Activity updated!');
          $state.go('app.activity');
        });
    };
  };

  angular.module('cz.angular.pushups.activity.edit',
    [
      'cz.angular.pushups.activity.form'
    ])

    .controller('EditActivityController', EditActivityController);

})();
