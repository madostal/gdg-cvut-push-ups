(function() {

  var LoginInfoComponentController = function(authService) {
    this.logout = authService.logout.bind(authService);
    this.name = authService.getUserName();
  };
  
  angular.module('cz.angular.common.auth.loginInfo',
    [
      'cz.angular.common.auth.service'
    ])
    .component('loginInfo', {
      templateUrl: 'app/common/auth/login/login-info.component.html',
      controller: LoginInfoComponentController,
      controllerAs: 'vm'
    });

})();
