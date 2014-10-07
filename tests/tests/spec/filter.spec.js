describe('Truncate filter', function() {

    beforeEach(module('myFilter'));

    it('should truncate a 10 character string',
        inject(function(truncateFilter) {
            var result = truncateFilter('Herbstwind', '...');
            expect(result).toEqual('Herbs...');
        })
    );

});
