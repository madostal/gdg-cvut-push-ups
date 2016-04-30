(function() {
  'use strict';

  var authDataStore = {};

  var AuthService = function($http, API_URL) {
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
          authDataStore = {};
          return response.data;
        });
    };

    /**
     * @return {boolean}
     */
    this.isAuthenticated = function() {
      return Boolean(authDataStore.data);
    };

    /**
     * @return {string}
     */
    this.getToken = function() {
      if (this.isAuthenticated()) {
        return authDataStore.data.token;
      }
    };

    /**
     * @return {boolean}
     */
    this.hasSomeRole = function() {
      // TODO for this app is not necessary
      return false;
    };

    /**
     *
     * @param response
     * @return {boolean}
     */
    this.isRequestRecoverable = function(response) {
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
    .service('authService', AuthService);

})();
