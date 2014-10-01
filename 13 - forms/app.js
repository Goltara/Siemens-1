angular.module('app', [])
.controller('MyCtrl', function() {
        this.save = function() {
            console.log('saved');
        }
    });