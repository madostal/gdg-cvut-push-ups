(function() {
  var LoginController = function($state) {
    this.onSuccess = function() {
      $state.go('app.dashboard');
    };
  };

  angular.module('cz.angular.pushups.login', [])
    .controller('LoginController', LoginController);

})();
