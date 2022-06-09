function receivesAFunction(callback){
    callback();
  }
  
  function returnsANamedFunction(){
    const fn = function(){};
    return fn;
  }
  function returnsAnAnonymousFunction(){
    return function(){};
  
  }