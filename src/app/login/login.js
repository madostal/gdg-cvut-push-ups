(function() {
  var LoginController = function($state) {
    this.credentials = {
      name: 'user1',
      password: 'pass'
    };

    this.onSuccess = function() {
      $state.go('app.dashboard');
    };

  };

  angular.module('cz.angular.pushups.login', [])
    .controller('LoginController', LoginController)

})();
