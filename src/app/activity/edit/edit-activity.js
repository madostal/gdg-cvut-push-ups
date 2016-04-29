(function() {

  var EditActivityController = function(activity, activityDataService, $state) {

    this.activity = activity;

    this.save = function(activity) {
      activityDataService.save(activity)
        .then(function() {
          $state.go('app.activity');
        });
    };
  };

  angular.module('cz.angular.simpleDevstack.activity.edit', [
      'cz.angular.simpleDevstack.activity.form'
    ])

    .controller('EditActivityController', EditActivityController);

})();
