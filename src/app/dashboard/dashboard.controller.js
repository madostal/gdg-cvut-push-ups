(function() {
  'use strict';

  var DashboardController = function(dashboardData) {

    // TODO získání dat ze služby

    this.userRating = dashboardData.rating;
    this.todayPerformance = dashboardData.today;
    this.dailyPerformance = dashboardData.month.daily;
    this.monthlyActivity = dashboardData.month.activities;

  };

  angular.module('cz.angular.pushups.dashboard')
    .controller('DashboardController', DashboardController);

})();
