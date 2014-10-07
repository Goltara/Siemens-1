describe('date diff service', function() {
    var fooMock, myService;

    beforeEach(function () {
        module('myApp', function ($provide) {
            fooMock = jasmine.createSpyObj('foo', ['bar']);
            $provide.value('foo', fooMock);
        });
        inject(function (_myService_) {
            myService = _myService_;
        });
    });

    beforeEach(inject(function ($injector) {
        myService = $injector.get('myService');
    }));

    it('should call foo.bar on myService.test passing through parameters.', function (){
        myService.test('WEE!');
        expect(fooMock.bar).toHaveBeenCalledWith('WEE!');
    });
});