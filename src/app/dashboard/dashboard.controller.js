(function() {
  'use strict';

  var DashboardController = function(dashboardData) {

    console.log(dashboardData)

    this.todayPerformance = dashboardData.today;
    this.dailyPerformance = dashboardData.month.daily;
    this.monthlyActivity = dashboardData.month.activities;

  };

  angular.module('cz.angular.simpleDevstack.dashboard')
    .controller('DashboardController', DashboardController);

})();
