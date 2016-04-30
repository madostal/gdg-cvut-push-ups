(function() {

  var Activity = function($resource, API_URL) {

    var pagingInterceptor = {
      response: function(response) {
        var data = response.data;
        var content = data.content;

        Object.defineProperty(content, '$totalItems', {value: data.totalElements});
        Object.defineProperty(content, '$itemsPerPage', {value: data.size});
        Object.defineProperty(content, '$totalPages', {value: data.totalPages});

        return content;
      }
    };

    return $resource(
      API_URL + '/activities/:id',
      {id: '@id'},
      {
        'query': {
          method: 'GET', isArray: false, interceptor: pagingInterceptor
        }
      });
  };

  var ActivityService = function($http, Activity) {
    this.getList = function(page) {
      return Activity.query({page: page}).$promise;
    };

    this.getById = function(id) {
      var convertActivityDate = function(activity) {
        activity.date = new Date(activity.date);
        return activity;
      };

      return Activity.get({id: id}).$promise
        .then(convertActivityDate);
    };

    this.save = function(activity) {
      return Activity.save(activity).$promise;
    };

    this.delete = function(activity) {
      return Activity.delete(activity).$promise;
    };
  };

  var ActivityTypesService = function($http, API_URL) {
    var activityPromise = $http.get(API_URL + '/activity-types')
      .then(function(response) {
        return response.data;
      });

    this.getActivityTypes = function() {
      return activityPromise;
    };
  };

  angular.module('cz.angular.simpleDevstack.activity')
    .service('activityService', ActivityService)
    .service('activityTypesService', ActivityTypesService)
    .factory('Activity', Activity);

})();
