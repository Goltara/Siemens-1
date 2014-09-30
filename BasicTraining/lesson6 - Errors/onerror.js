window.onerror = function(msg, url, nr) {
    console.log('IN ON ERROR');
    console.log(msg, url, nr);
    return true;
};


throw new Error('An error occurred');