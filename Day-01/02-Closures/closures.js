create an object "spinner"
the object is expected to exhibit the following behavior

spinner.up() // => 1
spinner.up() // => 2
spinner.up() // => 3
spinner.up() // => 4

spinner.down() // => 3
spinner.down() // => 2
spinner.down() // => 1
spinner.down() // => 0
spinner.down() // => -1


//revealing module pattern

function getSpinner(){
    var count = 0
    function increment(){
      return ++count;
    }
    function decrement(){
      return --count;
    }
    return {
        up : increment,
        down : decrement
    };
}



write a function that return true/false depending on the given number is a prime number or not.

function getPrimeFinder(){
    var cache = {};
    function checkPrime(n){
        console.log("processing");
        if (n <= 3) return true;
        for(var i=2; i<=(n/2); i++)
            if (n % i === 0) return false;
        return true;
    }
    function isPrime(n){
        if (typeof cache[n] === "undefined")
            cache[n] = checkPrime(n);
        return cache[n];
    }
    return isPrime;
}
