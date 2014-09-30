angular
    .module('app', [])
    .controller('MyCtrl', MyCtrl);

MyCtrl.$inject = ['$http'];
function MyCtrl($http) {
    var vm = this;
    vm.name = '';
    $http.get('http://localhost:8080/todo').success(function(data) {
        debugger;
    });

}