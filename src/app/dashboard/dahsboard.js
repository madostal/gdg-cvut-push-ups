(function() {
  'use strict';

  angular.module('cz.angular.simpleDevstack.dashboard', [
    'cz.angular.simpleDevstack.dashboard.component.activityChart',
    'cz.angular.simpleDevstack.dashboard.component.dailyChart'
  ])
    .config(function($stateProvider) {

      $stateProvider.state('dashboard', {
        parent: 'app',
        url: 'dashboard',
        templateUrl: 'app/dashboard/dashboard.template.html',
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
