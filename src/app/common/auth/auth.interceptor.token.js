(function() {
  'use strict';

  var tokenInterceptor = function($injector) {
    return {
      request: function(config) {
        var authService = $injector.get('authService');

        if (authService.isAuthenticated()) {
          config.headers = config.headers || {};
          config.headers['X-Auth-Token'] = authService.getToken();
        }

        return config;
      }
    };
  };

  var tokenInterceptorsConfig = function($httpProvider) {
    $httpProvider.interceptors.push(tokenInterceptor);
  };

  angular.module('cz.angular.common.auth.interceptor.token', [
    'cz.angular.common.auth.service'
  ])
    .config(tokenInterceptorsConfig);
})();
