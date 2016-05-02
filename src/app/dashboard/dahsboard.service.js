(function() {
  'use strict';

  var DashboardDataService = function($http, API_URL) {

    this.loadData = function() {
      // fake data
      
      return $http.get(API_URL + '/dashboard')
        .then(function(response) {
          return response.data;
        });
    };

  };

  angular.module('cz.angular.pushups.dashboard')
    .service('dashboardDataService', DashboardDataService);

})();
