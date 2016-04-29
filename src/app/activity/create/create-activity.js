(function() {

  var CreateActivityController = function(Activity, $state) {

    this.activity = {
      date: new Date(),
      count: 0
    };

    this.save = function(activity) {
      Activity.save(activity).$promise
        .then(function() {
          $state.go('app.activity');
        });
    };
  };

  angular.module('cz.angular.simpleDevstack.activity.create',
    [
      'cz.angular.simpleDevstack.activity.form'
    ])
    .controller('CreateActivityController', CreateActivityController);

})();
