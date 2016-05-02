(function() {
  'use strict';

  var configFunction = function($stateProvider) {

    $stateProvider.state('app.dashboard', {
      url: 'dashboard',
      templateUrl: 'app/dashboard/dashboard.html',
      controller: 'DashboardController',
      controllerAs: 'dashboard'
      // TODO 2: dashboard resolve
    });
  };

  angular.module('cz.angular.pushups.dashboard', [
    'ui.router',

    'cz.angular.pushups.dashboard.component.activityChart',
    'cz.angular.pushups.dashboard.component.dailyChart'
  ])
  // TODO 2: dashboard config

})();
