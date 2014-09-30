try {
    setTimeout(function() {
        throw new Error("whoops");
    }, 0);
} catch (e) {
    console.log(e);
}