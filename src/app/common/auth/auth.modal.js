(function() {
  'use strict';

  function AuthLoginModal($uibModal, $rootScope) {

    this.modalInstance = null;

    this.createModalInstance_ = function() {
      this.modalInstance = $uibModal.open({
        templateUrl: 'app/common/auth/auth.modal.template.html',
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

    /**
     * @return {Promise}
     */
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
    .service('authLoginModal', AuthLoginModal);

})();
