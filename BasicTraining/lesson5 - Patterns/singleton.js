var singleton = (function () {
    var instance;
    return {
        getInstance: function () {
            if (instance) {
                return instance;
            }
            instance = {
                name: 'Klaus',
                getName: function () {
                    return this.name;
                },
                setName: function(name) {
                    this.name = name;
                    return this;
                }
            };
            return instance;
        }
    }
})();

var i1 = singleton.getInstance();
var i2 = singleton.getInstance();

console.log(i1.getName(), i2.getName());
i2.setName('Willi');
console.log(i1.getName(), i2.getName());