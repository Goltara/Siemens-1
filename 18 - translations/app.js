angular
    .module('myApp', ['pascalprecht.translate'])
    .config(config)
    .controller('MyCtrl', MyCtrl);

config.$inject = ['$translateProvider'];
function config($translateProvider) {
    $translateProvider.translations('de', {
        'SOMETHING': 'etwas',
        'DOG': 'Hund',
        'HELLO': 'Hello {{ username }}'
    });
    $translateProvider.translations('en', {
        'SOMETHING': 'something',
        'DOG': 'dog',
        'HELLO': 'Hallo {{ username }}'
    });

    var language = navigator.language.substr(0, 2);
    $translateProvider.preferredLanguage(language);
}

MyCtrl.$inject = ['$translate'];
function MyCtrl($translate) {
    this.name = 'Klaus';

    this.translate = function(lang) {
        $translate.use(lang);
    };
}