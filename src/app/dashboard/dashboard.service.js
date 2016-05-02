(function() {
  'use strict';

  var DashboardDataService = function() {

    // TODO 2: dashboard api data

    this.loadData = function() {
      return {
        'rating': 10,
        'today': [
          {
            'activity': 'Pushups',
            'count': 33
          },
          {
            'activity': 'Squats',
            'count': 20
          }
        ],
        'month': {
          'activities': [
            {
              'activity': 'Pushups',
              'count': 330
            },
            {
              'activity': 'Squats',
              'count': 200
            }
          ],
          'daily': [
            {
              'key': 'Pushups',
              'values': [
                {
                  'x': '2016-03-01T07:02Z',
                  'y': 5
                },
                {
                  'x': '2016-03-02T07:02Z',
                  'y': 10
                },
                {
                  'x': '2016-03-03T07:02Z',
                  'y': 1
                }
              ]
            },
            {
              'key': 'Squats',
              'values': [
                {
                  'x': '2016-03-01T07:02Z',
                  'y': 5
                },
                {
                  'x': '2016-03-02T07:02Z',
                  'y': 10
                },
                {
                  'x': '2016-03-03T07:02Z',
                  'y': 1
                }
              ]
            }
          ]
        }
      };

    };

  };

  angular.module('cz.angular.pushups.dashboard')
    .service('dashboardDataService', DashboardDataService);

})();
