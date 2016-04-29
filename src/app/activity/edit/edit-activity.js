(function() {

  var EditActivityController = function(activity, activityService, $state) {

    this.activity = activity;

    this.save = function(activity) {
      activityService.save(activity)
        .then(function() {
          $state.go('app.activity');
        });
    };
  };

  angular.module('cz.angular.simpleDevstack.activity.edit',
    [
      'cz.angular.simpleDevstack.activity.form'
    ])

    .controller('EditActivityController', EditActivityController);

})();
