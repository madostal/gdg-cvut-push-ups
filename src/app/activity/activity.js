(function() {
  var configRoutes = function($stateProvider) {

    $stateProvider
      .state('app.activity', {
        url: 'activity',
        templateUrl: 'app/activity/list/list-activity.html',
        controller: 'ListActivityController',
        controllerAs: 'vm',

        resolve: {
          activities: function(activityService) {
            return activityService.getList(); // z activity
          }
        }
      })

      .state('app.activity-create', {
        url: 'activity/create',
        templateUrl: 'app/activity/create/create-activity.html',
        controller: 'CreateActivityController',
        controllerAs: 'vm'
      })

      .state('app.activity-edit', {
        url: 'activity/edit/:id',
        templateUrl: 'app/activity/edit/edit-activity.html',
        controller: 'EditActivityController',
        controllerAs: 'vm',

        resolve: {
          activity: function(activityService, $stateParams) {
            var id = $stateParams.id;
            return activityService.getById(id);
          }
        }
      });
  };

  angular.module('cz.angular.pushups.activity',
    [
      'ngResource',
      'ui.router',
      'cz.angular.pushups.activity.create',
      'cz.angular.pushups.activity.edit',
      'cz.angular.pushups.activity.list'
    ])
//    .config(configRoutes);
})();
