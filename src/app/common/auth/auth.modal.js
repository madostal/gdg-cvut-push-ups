(function() {
  'use strict';

  function AuthLoginModal($uibModal, $rootScope) {

    this.modalInstance = null;

    this.createModalInstance_ = function() {
      this.modalInstance = $uibModal.open({
        template: '<login-form on-success="auth.onSuccess(user)"></login-form>',
        controller: AuthModalLoginController,
        controllerAs: 'auth'
      });

      return this.modalInstance.result
        .catch(function() {
          $rootScope.$broadcast('auth:loginCanceled');
        })
        .finally(function() {
          delete this.modalInstance;
        }.bind(this));
    };

    this.prepareLoginModal = function() {
      if (!this.modalInstance) {
        this.createModalInstance_();
      }

      return this.modalInstance.result;
    };
  }

  function AuthModalLoginController($uibModalInstance) {

    this.onSuccess = function(user) {
      $uibModalInstance.close(user);
    };

  }

  angular.module('cz.angular.common.auth.modal', [
    'ui.bootstrap'
  ])
    .service('authLoginModal', AuthLoginModal)

})();
