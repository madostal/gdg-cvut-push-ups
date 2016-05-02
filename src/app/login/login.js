(function() {
  var LoginController = function($state, authService, ngToast) {

    this.login = function(form) {
      authService.login(this.credentials)
        .then(this.onSuccess.bind(this), this.badLogin.bind(this, form));
    };

    this.onSuccess = function(authData) {
      console.log(authData);
      // TODO do hlaviček
      $state.go('app.dashboard');
    };

    this.badLogin = function(form) {
      ngToast.danger('Login failed!');
    };
  };

  angular.module('cz.angular.pushups.login', [])
    .controller('LoginController', LoginController);

})();
