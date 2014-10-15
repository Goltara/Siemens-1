angular
    .module('myApp', [])
    .controller('MyCtrl', MyCtrl)
    .provider('user', userProvider)
    .config(userProvConf);

function userProvider() {
    var url = '';

    this.setUrl = function(value) {
        url = value;
    };

    this.$get = function userFactory() {
        return {
            name: 'Lisa',
            url: url
        }
    };
}

userProvConf.$inject = ['userProvider'];
function userProvConf(userProvider) {
    userProvider.setUrl('/users');
}

MyCtrl.$inject = ['user'];
function MyCtrl(user) {
    this.name = user.name;
    this.url = user.url;
}