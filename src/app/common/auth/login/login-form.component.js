(function() {
  'use strict';

  var LoginController = function($rootScope, $state, authService, ngToast) {
    this.credentials = {};

    this.$onInit = function() {
      if (this.initialCredentials)
        this.credentials = angular.copy(this.initialCredentials);
    };

    this.badLogin = function(form) {
      form.$setPristine();
      form.$setUntouched();

      this.credentials = {};
      ngToast.danger('Login failed!');
    };

    this.login = function(form) {
      authService.login(this.credentials)
        .then(this.onSuccess.bind(this), this.badLogin.bind(this, form));
    };
  };

  angular.module('cz.angular.common.auth.login', [])
    .component('loginForm', {
      templateUrl: 'app/common/auth/login/login-form.component.html',
      controller: LoginController,
      controllerAs: 'vm',
      bindings: {
        initialCredentials: '<',
        onSuccess: '&'
      }
    });

})();
