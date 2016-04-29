(function() {
  'use strict';

  var DashboardDataService = function($http, API_URL) {

    this.loadData = function() {
      return $http.get(API_URL + '/dashboard')
        .then(function(response) {
          return response.data;
        });
    };

  };

  angular.module('cz.angular.simpleDevstack.dashboard')
    .service('dashboardDataService', DashboardDataService);

})();
