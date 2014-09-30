var myArr = ['a', 'b', 'c'];

myArr.push('d');

myArr.forEach(function loopingFunction(val, index, arr) {
    arr[index] = index + ' - ' + val;
});


for (var i = 0; i< 100000; i++) {
    // do some stuff
    console.log(i);
}



console.log(myArr);