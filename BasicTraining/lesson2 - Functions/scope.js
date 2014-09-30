var myGlobal = 'global value';

function scope() {
    myLocal1 = 'local value 1';

    var myLocal2 = 'local value 2';

    console.log('In function:', myGlobal, myLocal1, myLocal2);
}
scope();

console.log('Global:', myGlobal, myLocal1);

console.log(myLocal2);