(function() {
  'use strict';

  var tokenInterceptor = function(authDataStore) {
    return {
      request: function(config) {
        config.headers = config.headers || {};
        if (authDataStore.data) {

          config.headers['X-Auth-Token'] = authDataStore.data.token;
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
