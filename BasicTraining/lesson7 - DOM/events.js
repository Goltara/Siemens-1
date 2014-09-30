$(document).ready(function() {
    document.getElementById('myButton').onclick = function(e) {
        console.log(e);
    };


    $('#my2ndButton').on('click', function(e) {

        console.log('you just clicked on an ' + e.target);
        console.log(e);
    });
});



