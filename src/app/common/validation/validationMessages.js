(function() {
  'use strict';

  angular.module('cz.angular.common.validation', [
    'ngMessages'
  ])
    .component('validationMessages', {
      templateUrl: 'app/common/validation/validationMessages.html',
      transclude: true,
      bindings: {
        inputField: '<',
        name: '@',
        params: '<'
      },
      controller: function() {
        this.name = this.name || 'Field';
      },
      controllerAs: 'vm'
    });

})();
