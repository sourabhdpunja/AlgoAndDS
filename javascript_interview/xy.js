var x = 10;

function y() {
    x = 100;
    return;
    function x() { }
}

y();

console.log(x); // 10

// Functions declarations are also hoisted, but these go to the very top, so will sit above all of the variable declarations.