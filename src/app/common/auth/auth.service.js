(function() {
  'use strict';

  var AuthService = function($http, API_URL, authDataStore) {
    this.LOGIN_URL = API_URL + '/login';
    this.LOGOUT_URL = API_URL + '/logout';

    /**
     * @param credentials
     * @return Promise
     */
    this.login = function(credentials) {

      return $http.post(this.LOGIN_URL, credentials)
        .then(function(response) {
          var authInfo = response.data;
          authDataStore.data = authInfo;

          return authInfo;
        });
    };

    /**
     * @return Promise
     */
    this.logout = function() {
      return $http.get(this.LOGOUT_URL)
        .then(function(response) {
          return response.data;
        });
    };

    /**
     *
     * @param response
     * @return {boolean}
     */
    this.isRecoverable = function(response) {
      return response.status === 401 && !this.isLoginResponse_(response);
    };

    /**
     * @param response
     * @return {boolean}
     * @private
     */
    this.isLoginResponse_ = function(response) {
      return response.config.url === this.LOGIN_URL;
    };
  };

  angular.module('cz.angular.common.auth.service', [])
    .value('authDataStore', {})
    .service('authService', AuthService);

})();
