(function() {

  var LoginInfoComponentController = function(authService) {
    this.logout = authService.logout.bind(authService);
    this.name = authService.getUserName();
  };

  var loginInfoComponent = {
    templateUrl: 'app/common/auth/login/login-info.component.html',
    controller: LoginInfoComponentController,
    controllerAs: 'vm'
  };

  angular.module('cz.angular.common.auth.loginInfo',
    [
      'cz.angular.common.auth.service'
    ])
    .component('loginInfo', loginInfoComponent);

})();
