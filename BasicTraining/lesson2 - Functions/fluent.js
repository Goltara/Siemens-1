var myObj = {
    a: function() {
        "use strict";
        console.log('a');
        return this;
    },
    b: function() {
        console.log('b');
        return this;
    }
};

debugger;

myObj.a().b();