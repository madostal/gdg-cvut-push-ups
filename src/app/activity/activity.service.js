(function(){

  var ActivityDataService = function($http, $q) {

    var TYPES = [
      {name: 'Squats'},
      {name: 'Push ups'},
      {name: 'Burpies'}
    ];

    this.activities = [];

    this.getList = function() {
      return $q.resolve(this.activities);
    };

    this.getById = function(id) {
      return $q.resolve(this.activities[id]);
    };

    this.save = function(activity) {
      if(activity.id === undefined) {
        activity.id = this.activities.length;
        this.activities.push(activity);
      }

      console.table(this.activities);

      return $q.resolve();
    };

    this.getActivityTypes = function(){
      return $q.resolve(TYPES);
    };

    this.save({
      count : 10,
      type : TYPES[0],
      date: new Date(),
      time : new Date()
    });

    this.save({
      count : 15,
      type : TYPES[1],
      date: new Date(),
      time : new Date()
    });
  };

  angular.module('cz.angular.simpleDevstack.activity')
    .service('activityDataService', ActivityDataService);

})();
