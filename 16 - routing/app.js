angular
    .module('app', ['ui.router'])
    .config(config)
    .controller('MyCtrl', MyCtrl);

config.$inject = ['$stateProvider', '$urlRouterProvider'];

function config($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/Paul');

    $stateProvider
        .state('Peter', {
            url: '/Paul',
            template: '<div>Route A</div>'
        })
        .state('b', {
            url: '/b',
            template: '<div>Route B</div>'
        });
}

MyCtrl.$inject = ['$state'];
function MyCtrl($state) {
    this.name = 'Heidi';
    this.change = function() {
        $state.go('b');
    }
}