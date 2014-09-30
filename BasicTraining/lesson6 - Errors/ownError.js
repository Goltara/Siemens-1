var MyErr = function (message) {
    this.message = message;
    this.name = 'MyErr';
}

MyErr.prototype = new Error();
MyErr.prototype.constructor = MyErr;

try {
    throw new MyErr('Just threw my own error');
} catch (e) {
    console.log(e);
    console.log('Instance of MyError:',  e instanceof MyErr);
    console.log('Instance of Error:',  e instanceof Error);
}