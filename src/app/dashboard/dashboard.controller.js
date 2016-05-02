(function() {
  'use strict';

  var DashboardController = function(dashboardDataService) {

    // TODO 2: dashboard resolve
    var dashboardData = dashboardDataService.loadData();

    this.userRating = dashboardData.rating;
    this.todayPerformance = dashboardData.today;
    this.dailyPerformance = dashboardData.month.daily;
    this.monthlyActivity = dashboardData.month.activities;

  };

  angular.module('cz.angular.pushups.dashboard')
    .controller('DashboardController', DashboardController);

})();
