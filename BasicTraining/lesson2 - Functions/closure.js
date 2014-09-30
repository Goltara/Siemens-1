function closure() {
    var hidden = '';
    return {
        get: function() {
            return hidden;
        },
        set: function(val) {
            hidden = val;
        }
    }
}

var access = closure();
access.set('hello');
console.log(access.get());