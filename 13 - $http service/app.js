angular
    .module('app', [])
    .controller('MyCtrl', MyCtrl);

MyCtrl.$inject = ['$http'];
function MyCtrl($http) {
    var vm = this;
    vm.name = '';
    var promise = $http.get('http://localhost:8080/todo');

    promise.success(function(data) {
        debugger;
    });

    promise.success(function() {

    })

    $http({
        url: '/user',
        method: ''
    })

}