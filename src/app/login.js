(function(){
  var LoginController = function($http, API_URL, $state, authTokenStore) {
    this.credentials = {
      name: 'user1',
      password: 'pass'
    };

    this.login = function() {
      $http.post(API_URL + '/login', this.credentials)
        .then(function(response) {
          var token = response.data.token;
          authTokenStore.token = token;

          $state.go('app.dashboard');
        });
    };
  };

  var tokenInterceptor = function (authTokenStore) {
    return {
      request: function(config) {
        config.headers = config.headers || {};
        if (authTokenStore.token) {

          config.headers['X-Auth-Token'] = authTokenStore.token;
        }
        return config;
      }
    };
  };

  var interceptorsConfig = function($httpProvider) {
    $httpProvider.interceptors.push(tokenInterceptor);
  };

  angular.module('cz.angular.simpleDevstack.login', [])
    .value('authTokenStore', {})
    .controller('LoginController', LoginController)
    .config(interceptorsConfig);

})();
