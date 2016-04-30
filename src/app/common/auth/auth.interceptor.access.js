(function() {
  'use strict';

  var accessInterceptor = function loginInterceptor($injector) {

    return {
      responseError: function(response) {
        return $injector.invoke(function(authLoginModal, authService, $http, $q, $rootScope) {

          if (authService.isRecoverable(response)) {

            return authLoginModal.prepareLoginModal()
              .then(function() {
                return $http(response.config);
              });

          } else if (response.status === 403) {
            $rootScope.$broadcast('auth:forbidden', response);
          }

          return $q.reject(response);
        });
      }
    };
  };

  var accessInterceptorConfig = function($httpProvider) {
    $httpProvider.interceptors.push(accessInterceptor);
  };

  angular.module('cz.angular.common.auth.interceptor.access', [
    'cz.angular.common.auth.service',
    'cz.angular.common.auth.modal'
  ])
    .config(accessInterceptorConfig);
})();

