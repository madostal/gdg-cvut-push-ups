(function() {
  var configRoutes = function($stateProvider) {

    $stateProvider
      .state('app.activity', {
        url: 'activity',
        templateUrl: 'app/activity/list/list-activity.html',
        controller: 'ListActivityController',
        controllerAs: 'vm',

        resolve: {
          activities: function(activityDataService) {
            return activityDataService.getList();
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
          activity: function(activityDataService, $stateParams) {
            var id = $stateParams.id;
            return activityDataService.getById(id);
          }
        }
      });
  };

  angular.module('cz.angular.simpleDevstack.activity', [
      'ui.router',
      'cz.angular.simpleDevstack.activity.create',
      'cz.angular.simpleDevstack.activity.edit',
      'cz.angular.simpleDevstack.activity.list'
    ])
    .config(configRoutes);
})();
