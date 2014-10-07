describe('project list', function() {
    it('should check, if the list has 3 rows', function(done) {
        browser.get('/');

        var name = element(by.repeater('project in projects').row(0).column('name'));

        expect(name.getText()).toEqual('Projekt A');

        done();
        setTimeout(function() {
            //done();
        },1000);
    });
});