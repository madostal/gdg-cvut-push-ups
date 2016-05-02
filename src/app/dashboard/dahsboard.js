(function() {
  'use strict';

  angular.module('cz.angular.pushups.dashboard', [
    'cz.angular.pushups.dashboard.component.activityChart',
    'cz.angular.pushups.dashboard.component.dailyChart'
  ])
    .config(function($stateProvider) {

      $stateProvider.state('app.dashboard', {
        url: 'dashboard',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'dashboard',
        resolve: {
          dashboardData: function(dashboardDataService) {
            return dashboardDataService.loadData();
          }
        }
      });
    });

})();
