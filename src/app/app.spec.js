describe('application', function() {

  beforeEach(module('cz.angular.simpleDevstack'));

  it('should have defined module', function() {
    expect(angular.module('cz.angular.simpleDevstack')).toBeDefined();
  });

});
