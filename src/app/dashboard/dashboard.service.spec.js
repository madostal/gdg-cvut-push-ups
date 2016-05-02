describe('cz.angular.pushups.dashboard', function() {

  beforeEach(module('cz.angular.pushups.dashboard'));

  beforeEach(module({
    API_URL: 'API_URL'
  }));

  it('should be defined as module', function() {
    expect(angular.module('cz.angular.pushups.dashboard')).toBeDefined();
  });

  it('should contains dashboardDataService', inject(function($injector) {
    expect($injector.has('dashboardDataService')).toBe(true);
  }));

  describe('dashboardDataService', function() {

    var responseData = {'dashboardData': 'dashboardData'};

    beforeEach(inject(function($httpBackend, dashboardDataService) {
      this.$httpBackend = $httpBackend;
      this.$httpBackend.expectGET('API_URL/dashboard').respond(responseData);

      this.dashboardDataService = dashboardDataService;
    }));

    it('should call GET to API_URL/dashboard', function() {

      this.dashboardDataService.loadData();

      this.$httpBackend.flush();
    });

    it('should return data from response', function(done) {

      this.dashboardDataService.loadData()
        .then(function(data) {
          expect(data).toEqual(responseData);
          done();
        });

      this.$httpBackend.flush();
    });
  });
});
