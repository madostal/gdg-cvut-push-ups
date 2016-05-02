(function() {

  var ListActivityController = function(activities, ngToast) {
    this.activities = activities;

  };

  angular.module('cz.angular.pushups.activity.list', [
    'ui.bootstrap'
  ])

    .controller('ListActivityController', ListActivityController);

})();
