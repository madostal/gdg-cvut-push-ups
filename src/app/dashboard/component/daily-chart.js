(function() {
  'use strict';

  var Controller = function() {
    
    // TODO odkaz

    this.options = {
      chart: {
        type: 'multiBarChart',
        height: 450,
        margin: {
          top: 20,
          right: 20,
          bottom: 45,
          left: 45
        },
        clipEdge: true,
        duration: 500,
        stacked: true,
        xAxis: {
          axisLabel: 'Day',
          showMaxMin: false,
          tick: 1,
          tickFormat: function(d) {
            return d3.time.format('%e. %m.')(new Date(d));
          }
        },
        yAxis: {
          tickFormat: function(d) {
            return d;
          }
        }

      }
    };
  };

  angular.module('cz.angular.pushups.dashboard.component.dailyChart', [
    'nvd3'
  ])
    .component('dailyChart', {
      bindings: {
        data: '<'
      },
      controller: Controller,
      controllerAs: 'dailyChart',
      templateUrl: 'app/dashboard/component/daily-chart.html'
    });

})();
