describe('MyApp Tabs', function() {


    var elm, scope;

    beforeEach(module('directiveApp'));

    beforeEach(inject(function($rootScope, $compile) {

        elm = angular.element('<my-dir data-name="lisa"></my-dir>');

        scope = $rootScope;

        $compile(elm)(scope);

        scope.$digest();
    }));

    it('should have the content lisa', function() {
        var content = elm.find('div').text();

        expect(content).toBe('lisa')
    });
});

//<div>lisa</div>