angular
    .module('app.my2ndCtrl', ['app.formatter'])
    .controller('My2ndCtrl', My2ndCtrl);

My2ndCtrl.$inject = ['formattingService'];
function My2ndCtrl(formattingService) {
    this.name = formattingService.toLowerCase('John Paul and Ringo');
}