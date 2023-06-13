function receivesAFunction(callback){
    return callback();
}

receivesAFunction(function() {return "This is a callback function"});

const returnsANamedFunction = () => function phrase() {return "This is a named function"};
     
const returnsAnAnonymousFunction = () => function() {return "This is an Anonymous function"};

