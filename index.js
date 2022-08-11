function receivesAFunction(callback) {
    return callback();
    
}
// receivesAFunction(function() { return 4+5});

const a = function() {}
function returnsANamedFunction() {
    return a;
}

function returnsAnAnonymousFunction() {
    return () => {
        console.log('This is an anonymous functions')
    }
}

// returnsAnAnonymousFunction(function(){
//    a => console.log('This is an anonymous functions');
// })
