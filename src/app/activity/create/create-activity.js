(function() {

  var CreateActivityController = function($state, Activity, ngToast) {

    this.activity = {
      date: new Date(),
      count: 0
    };

    this.save = function(activity) {
      Activity.save(activity).$promise
        .then(function() {
          ngToast.success('Activity created!');
          $state.go('app.activity');
        });
    };
  };

  angular.module('cz.angular.pushups.activity.create',
    [
      'cz.angular.pushups.activity.form'
    ])
    .controller('CreateActivityController', CreateActivityController);

})();
