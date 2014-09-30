window.onerror = function (msg, url, nr) {
    $.ajax({
        url: '/logger',
        data: {
            msg: msg,
                url: url,
                nr: nr
        }
    });
    return true;
};

throw new Error('An error occurred');