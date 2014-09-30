function asynchFunc(cb) {
    cb('hello');
}

var callback = function myFunc(str) {
    console.log(str);
};

asynchFunc(callback);