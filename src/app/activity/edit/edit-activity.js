(function() {

  var EditActivityController = function(activity, $state) {

    this.activity = activity;

    this.save = function(activity) {
      activity.$save()
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
