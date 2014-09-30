var myArr = ['a', 'b', 'c'];

myArr.push('d');

myArr.forEach(function(val, index, arr) {
    arr[index] = index + ' - ' + val;
});

console.log(myArr);