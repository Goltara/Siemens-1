function promisedFunc() {
    var def = $.Deferred();


    setTimeout(function() {
        //def.resolve('Success');
        def.reject('Failure');
    }, 0);
    return def.promise();
}

promisedFunc().done(function (data) {
    console.log('Done: ' + data)
}).fail(function (data) {
    console.log('Fail: ' + data)
}).always(function () {
    console.log('Finished');
});