var UserManager = (function () {

    var execute = function (name) {
        return UserManager[name] &&
            UserManager[name].apply(UserManager,[].slice.call(arguments, 1));
    };

    var createUser = function (id, name) {
        return {
            id: id,
            name: name
        }
    };

    return {
        execute: execute,
        createUser: createUser
    }
})();

var klaus = UserManager.execute("createUser", 1, "Klaus");

console.log(klaus);