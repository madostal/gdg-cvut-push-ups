(function() {

  var ListActivityController = function(activities, Activity) {
    this.activities = activities;

    this.page = 1;

    this.reload = function() {
      Activity.query({page: this.page}, function(activities) {
        this.activities = activities;
      }.bind(this));
    };

    this.delete = function(activity) {
      Activity.delete(activity, this.reload.bind(this));
    };
  };

  angular.module('cz.angular.simpleDevstack.activity.list',
    [
      'ui.bootstrap'
    ])

    .controller('ListActivityController', ListActivityController);

})();
