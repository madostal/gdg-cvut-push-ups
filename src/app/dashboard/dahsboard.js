(function() {
  'use strict';

  angular.module('cz.angular.pushups.dashboard', [
    'ui.router',

    'cz.angular.pushups.dashboard.component.activityChart',
    'cz.angular.pushups.dashboard.component.dailyChart'
  ])
    .config(function($stateProvider) {

      
      $stateProvider.state('app.dashboard', {
        url: 'dashboard',
        // TODO 2: dashboard
      });
    });

})();
