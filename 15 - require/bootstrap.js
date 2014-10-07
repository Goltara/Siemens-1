// https://github.com/requirejs/domReady

define(['require', 'angular', 'app'], function(require, ng, app) {
    require(['domReady!'], function() {
        ng.bootstrap(document, ['app']);
    });
});