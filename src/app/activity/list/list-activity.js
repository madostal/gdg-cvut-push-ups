(function() {

  var ListActivityController = function(activities) {

    this.activities = activities;
  };

  angular.module('cz.angular.simpleDevstack.activity.list', [
      'ui.bootstrap'
    ])

    .controller('ListActivityController', ListActivityController);

})();
