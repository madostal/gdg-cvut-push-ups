(function() {

  var ListActivityController = function(activities, activityService) {
    this.activities = activities;

    this.page = 1;

    this.reload = function() {
      activityService.getList(this.page)
        .then(function(activities) {
          this.activities = activities;
        }.bind(this));
    };

    this.delete = function(activity) {
      activityService.delete(activity)
        .then(this.reload.bind(this));
    };
  };

  angular.module('cz.angular.simpleDevstack.activity.list',
    [
      'ui.bootstrap'
    ])

    .controller('ListActivityController', ListActivityController);

})();
