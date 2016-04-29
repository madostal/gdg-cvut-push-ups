(function(){

  var Activity = function($resource, API_URL) {
    return $resource(API_URL + '/activities-non-page/:id', {id: '@id'});
  };

  var ActivityDataService = function($http, $q) {

    var TYPES = [
      {name: 'Squats'},
      {name: 'Pushups', id: "1"},
      {name: 'Burpies'}
    ];

    this.getActivityTypes = function(){
      return $q.resolve(TYPES);
    };
  };

  angular.module('cz.angular.simpleDevstack.activity')
    .service('activityDataService', ActivityDataService)
    .factory('Activity', Activity);

})();
