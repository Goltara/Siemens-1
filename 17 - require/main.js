require.config({
    'paths': {
        'angular': './angular',
        'domReady': './domReady'
    },
    shim: {
        'angular': {
            exports: 'angular'
        }
    },
    deps: ['./bootstrap']
    //deps: ['app']
});