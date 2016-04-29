(function() {
  'use strict';

  var Controller = function() {

    this.options = {
      chart: {
        type: 'pieChart',
        donut: true,
        height: 450,
        x: function(d) {
          return d.activity;
        },
        y: function(d) {
          return d.count;
        },
        showLabels: true,

        duration: 500,
        legend: {
          margin: {
            top: 5,
            right: 70,
            bottom: 5,
            left: 0
          }
        }
      }
    };
  };

  angular.module('cz.angular.simpleDevstack.dashboard.component.activityChart', [
    'nvd3'
  ])
    .component('activityChart', {
      bindings: {
        data: '<'
      },
      controller: Controller,
      controllerAs: 'activityChart',
      templateUrl: 'app/dashboard/component/activityChart.template.html'
    });

})();
