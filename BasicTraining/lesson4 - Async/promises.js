function myAsyncFunc(result) {
    var deferred = Q.defer();
    setTimeout(function() {
        if(result) {
            deferred.resolve('Success');
        } else {
            deferred.reject('Failure');
        }
    }, 1000);
    return deferred.promise;
}

function anotherAsyncFunction(data) {
    console.log(data);
}

myAsyncFunc(false)
    .then(anotherAsyncFunction, function(data) {console.log('In Failure Callback', data)});