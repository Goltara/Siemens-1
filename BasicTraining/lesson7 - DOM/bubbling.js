$(document).ready(function() {

    $('#button').on('click', function(e) {
        console.log('Button was clicked');
    });

    $('#innerDiv').on('click', function(e) {
        console.log('innerDiv was clicked');
        e.stopPropagation();
    });


    $('#outerDiv').on('click', function(e) {
        console.log('outerDiv was clicked');
    });

});


var myDiv = $('#div')
.css('height', '400px;')
.css('width', '400px;');