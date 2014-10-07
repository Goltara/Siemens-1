angular.module('directiveApp', [])
    .directive('myDir', function() {
        return {
            restrict: 'E',
            scope: {},
            template: '<div>{{ name }}</div>',
            link: function(scope, element, attrs) {
                scope.name = attrs['name']
            }
        }
    });