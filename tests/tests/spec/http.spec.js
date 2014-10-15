describe('http controller', function() {
    var $rootScope, $scope, createController, $httpBackend;

    beforeEach(module('http'));

    beforeEach(inject(function($injector) {
        $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();

        var $controller = $injector.get('$controller');

        createController = function() {
            return $controller('httpCtrl', {
                '$scope': $scope
            });
        };

        $httpBackend = $injector.get('$httpBackend');
        $httpBackend.when('GET', '/path').respond(
            [
                {
                    id: 1,
                    name: 'Projekt A'
                }, {
                    id: 2,
                    name: 'Projekt B'
                }
            ]
        );
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('verify data property of scope', function() {
        var controller = createController();

        $httpBackend.flush();

        var expected = [{
            id: 1,
            name: 'Projekt A'
        }, {
            id: 2,
            name: 'Projekt B'
        }];


        expect($scope.data).toEqual(expected);
    });
});
