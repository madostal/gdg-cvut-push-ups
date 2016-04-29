(function() {

  var ListActivityController = function(activities) {
    this.activities = activities;

    this.delete = function(activity) {

      activity.$delete().then(function() {
        var index = this.activities.indexOf(activity);
        this.activities.splice(index, 1);
      }.bind(this));
    };
    
  };

  angular.module('cz.angular.simpleDevstack.activity.list',
    [
      'ui.bootstrap'
    ])

    .controller('ListActivityController', ListActivityController);

})();
