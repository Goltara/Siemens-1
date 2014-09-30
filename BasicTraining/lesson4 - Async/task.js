var delayedFunc = function(value) {
    var deferred = Q.defer();

    setTimeout(function() {
        console.log(value);
        deferred.resolve(value);
    }, 1000);

    return deferred.promise;
};

//helloWorld = delayedFunc.bind(this, 'Hello World');

delayedFunc('Hello World')
    .then(delayedFunc)
    .then(delayedFunc)
    .then(delayedFunc);
