(function() {

  var ActivityTypesService = function($http, API_URL) {
    var activityPromise = $http.get(API_URL + '/activity-types')
      .then(function(response) {
        return response.data;
      });

    this.getActivityTypes = function() {
      return activityPromise;
    };
  };

  var Activity = function($resource, API_URL) {

    // TODO 3 - použít $resource

  };

  angular.module('cz.angular.pushups.activity')
    .service('activityService', ActivityService)
    .service('activityTypesService', ActivityTypesService)
    .factory('Activity', Activity);

})();
