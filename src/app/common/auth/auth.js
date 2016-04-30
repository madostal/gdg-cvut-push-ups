(function() {
  'use strict';

  angular.module('cz.angular.common.auth', [
    'cz.angular.common.auth.login',
    'cz.angular.common.auth.service',
    'cz.angular.common.auth.modal',
    'cz.angular.common.auth.uiRouter',
    'cz.angular.common.auth.interceptor.token',
    'cz.angular.common.auth.interceptor.access'
  ]);

})();
