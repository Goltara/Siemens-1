var arr = ['peter', 'paul', 'mary'];

arr.push('KLAUS');

var result = arr.map(function(val) {
    var ucFirst = val[0].toUpperCase();
    var rest = val.substr(1).toLowerCase();
    return ucFirst + rest;
});

/* BAD EXAMPLE*/
var result = [];
for(var i = 0; i < arr.length; i++) {
    result[i] = [];
    result[i].push(arr[i][0].toUpperCase());
    for(var j = 1; j < arr[i].length; j++) {
        result[i].push(arr[i][j].toLowerCase());
    }
    result[i] = result[i].join('');
}


console.log('Original', arr);
//console.log('Transformed', result);