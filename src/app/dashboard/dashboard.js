(function() {
  'use strict';

  var DashboardController = function(dashboardData) {

    this.userRating = dashboardData.rating;
    this.todayPerformance = dashboardData.today;
    this.dailyPerformance = dashboardData.month.daily;
    this.monthlyActivity = dashboardData.month.activities;

  };

  var configFunction = function($stateProvider) {

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
      // TODO 2: dashboard resolve
    });
  };

  angular.module('cz.angular.pushups.dashboard', [
    'ui.router',

    'cz.angular.pushups.dashboard.component.activityChart',
    'cz.angular.pushups.dashboard.component.dailyChart'
  ])
    .controller('DashboardController', DashboardController)
    .config(configFunction);
  // TODO 2: dashboard config

})();
