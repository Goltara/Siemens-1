(function() {
    "use strict";
    angular.module('app', [])
        .controller('ParentCtrl', ParentCtrl)
        .controller('MyCtrl', MyCtrl);

    function ParentCtrl() {
        this.name = 'Peter';
    }

    MyCtrl.$inject = ['$scope', '$timeout'];
    function MyCtrl($scope, $timeout) {
        var vm = this;

        //$scope.mary = 'Mary';
        vm.doSomething = doSomething;
        vm.mary = 'Mary';
        vm.name = 'Paul';

        activate();
        /////////////////////////////

        function activate() {
            $timeout(bootstrap, 2000);
        }

        function bootstrap() {
            vm.name = 'Ringo';
        }

        function doSomething() {
            console.log('Hello Master');
        }
    }
})();
