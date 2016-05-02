(function() {
  'use strict';

  var DashboardDataService = function($http, API_URL) {

    // TODO 2: dashboard api data

    this.loadData = function() {
      return $http.get(API_URL + '/dashboard')
        .then(function(response) {
          return response.data;
        });
    };

  };

  angular.module('cz.angular.pushups.dashboard')
    .service('dashboardDataService', DashboardDataService);

})();
