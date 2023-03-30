function receivesAFunction(callback) {
     callback()
}
function callback(){}
function returnsANamedFunction(){
    return function myFunction(){}
}
function returnsAnAnonymousFunction(){
return function(){}
}
    