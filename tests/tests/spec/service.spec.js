describe('Service with deps', function() {
    var dateDiffService;

    beforeEach(module('date'));

    beforeEach(
        inject(
            function($injector) {
                dateDiffService = $injector.get('diffService');
            }
        )
    );

    it('should calculate the correct diff', function() {

        var from = new Date('2014-04-03 11:00');
        var to = new Date('2014-04-03 12:00');

        var diff = dateDiffService.calculate(from, to);

        expect(diff).toEqual('01:00');
    });
});