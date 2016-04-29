(function() {

  var CreateActivityController = function(activityDataService, $state) {

    this.activity = {
      date: new Date(),
      time: new Date()
    };

    this.save = function(activity) {
      activityDataService.save(activity)
        .then(function() {
          $state.go('app.activity');
        });
    };
  };

  angular.module('cz.angular.simpleDevstack.activity.create', [
      'cz.angular.simpleDevstack.activity.form'
    ])

    .controller('CreateActivityController', CreateActivityController);

})();
