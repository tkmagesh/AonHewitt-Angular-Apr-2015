//Using Callback
function addAsyncUsingCallback(x,y,onResult){
  setTimeout(function(){
    console.log("returning result");
    var result = x + y;
    if (typeof onResult === "function")
        onResult(result);
  },2000);
}

function useAddAsyncUsingCallback(x,y){
  console.log("calling add");
  addAsyncUsingCallback(x,y, function(result){
     console.log("result = ", result);
  });
}

//Using Events
var calculator = (function(){
    var listenerFns = [];
    return {
        add : function(x,y){
            setTimeout(function(){
                var result = x + y;
                console.log("returning result");
                for(var i=0; i<listenerFns.length; i++)
                    listenerFns[i](result);
            },4000)
        },
        addEventListener : function(listenerFn){
            listenerFns.push(listenerFn);
        }
    }
})();

//Using Promise
function add(x,y){
    var promise = new Promise(function(resolve, reject){
       setTimeout(function(){
           console.log("returning result");
           var result = x + y;
           resolve(result);
       },4000);
    });
    return promise;
}

var p = add(100,200);
p.then(function(result){
    console.log("result = ", result);
});
