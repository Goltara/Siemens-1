describe('simple controller', function() {

    var $rootScope;
    var $scope;
    var createController;

    beforeEach(inject(function($injector) {
        $rootScope = $injector.get('$rootScope');

        $scope = $rootScope.$new();

        var $controller = $injector.get('$controller');

        createController = function() {
            return $controller('PasswordCtrl', {
                '$scope': $scope
            });
        };
    }));

    it('should have a method to check if the path is active', function() {
        var controller = createController();

        expect($scope.name).toBe('Hans-Peter');
    });

    it('should execute a function', function() {
        var controller = createController();
        expect($scope.myFunc()).toBe('hello');
    })
});
