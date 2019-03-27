// Immediately Invoked Function expression.
// A function that is executed right after it is created.
// Used to preserve a private scope. Wrap entire javascript file in an IIFE.

((num) => {
    return num * 2
})(10);

(function (num) {
    return num * 2
})(10);

(function () {

    function getTotal(a, b) {
        return a + b;
    }

    var $ = 'currency';

    if (true) console.log('hello world');

})();