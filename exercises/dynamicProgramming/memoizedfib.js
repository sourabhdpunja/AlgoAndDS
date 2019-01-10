

function slowFib(n){
    if (n<2){
        return n
    }
    return fib(n-1) + fib(n-2)
}

function memoizedFib(){
    let cache = {}
    return function fib(n) {
        if (n in cache){
            return cache[n];
        } else {
            cache[n] = slowFib(n)
            return cache[n]
        }
    }
}