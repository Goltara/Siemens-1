define(['angular'], function(angular) {
    var controller = angular.module('controller', [])
        .controller('MyCtrl', MyCtrl);

    //MyCtrl.$inject = [];
    function MyCtrl() {
        this.name = 'Lucy';
    }

    return controller;
});