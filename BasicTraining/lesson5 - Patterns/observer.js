function Timer() {

    this.callbacks = {};

};

Timer.prototype.trigger = function (event, args) {
    if (this.callbacks.hasOwnProperty(event) && this.callbacks[event].length) {
        var callbacks = this.callbacks[event];
        for (var i = 0; i < callbacks.length; i++) {
            callbacks[i].apply(this, args);
        }
    }
}

Timer.prototype.on = function (event, callback) {
    if (this.callbacks[event]) {
        this.callbacks[event].push(callback);
    } else {
        this.callbacks[event] = [callback];
    }
};

var myTimer = new Timer();

myTimer.on('myEvent', function(data) {
    console.log('myEvent with ' + data);
});

myTimer.trigger('myEvent', ['some Data']);
