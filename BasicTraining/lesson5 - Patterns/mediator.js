var mediator = (function () {
    var topics = {};

    var sub = function (topic, fn) {
        if (!topics[topic]) {
            topics[topic] = [];
        }

        topics[topic].push(fn);
    };

    var pub = function (topic) {
        if (!topics[topic]) {
            return false;
        }

        var args = Array.prototype.slice.call(arguments, 1);

        for (var i = 0; i < topics[topic].length; i++) {
            topics[topic][i].apply(this, args);
        }
    };

    return {
        publish: pub,
        subscribe: sub
    };

})();

mediator.subscribe('myTopic', function(data) {
    console.log('my topic with' + data);
});

mediator.publish('myTopic', 'some data');