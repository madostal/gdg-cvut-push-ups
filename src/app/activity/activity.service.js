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

  var ActivityTypesService = function($http, API_URL) {
    var activityPromise = $http.get(API_URL + '/activity-types').then(function(response) {
      return response.data
    });

    this.getActivityTypes = function() {
      return activityPromise;
    };
  };

  angular.module('cz.angular.simpleDevstack.activity')
    .service('activityTypesService', ActivityTypesService)
    .factory('Activity', Activity);

})();
