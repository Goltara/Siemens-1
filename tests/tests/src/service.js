angular.module('date', [])
    .factory('diffService', function() {
        return {
            calculate: function(from, to) {
                var start = from.getTime();
                var end = to.getTime();

                var diffMin = (end - start) / 1000 / 60;
                var diffHours = Math.floor(diffMin / 60);
                diffMin = diffMin - diffHours * 60;

                return this.format(diffHours) + ':' + this.format(diffMin);
            },

            format: function(number) {
                if (('' + number).length === 1) {
                    return '0' + number;
                }
                return number;
            }
        }
    });


