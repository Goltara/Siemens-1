try {
    var arr = new Array(-1);
} catch(e) {
    if(e instanceof SyntaxError) {
        console.log('Syntax Error');
    } else if(e instanceof RangeError) {
        console.log('Range Error');
    } else {
        console.log('Error');
    }
}