var closure = function() {
    var hidden = '';

    return {
        get: function() {
            return hidden;
        },
        set: function(val) {
            hidden = val;
        }
    }
};


var acc = closure();

acc.set('foo');
console.log(acc.get());



var time = '01:02:03';

function getSeconds(time) {
    var parts = time.split(':');

    return parseInt(parts[0]) * 60 * 60
        + parseInt(parts[1]) * 60
        + parseInt(parts[2]);
}

console.log(getSeconds(time));