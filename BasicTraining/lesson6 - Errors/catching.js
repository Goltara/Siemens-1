try {
    //throw new Error('An error occured');
} catch(e) {
    console.log(e.message);
} finally {
    console.log('cleaning up');
}