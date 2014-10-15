angular
    .module('app.myCtrl', ['app.formatter'])
    .controller('MyCtrl', MyCtrl);

MyCtrl.$inject = ['formattingService'];
function MyCtrl(formattingService) {
    this.name = formattingService.toUpperCase('Peter Paul and Mary');
}