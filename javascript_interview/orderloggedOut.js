function logNumbers() {
    console.log(1);
    setTimeout(function () { console.log(2) }, 1000);
    setTimeout(function () { console.log(3) }, 0);
    console.log(4);
}

logNumbers();

// Order printed
// 1, 4, 3, 2. 
// 4 is pronted before 3 because settimeout is placed in the event loop queue. 
// Event loop is a queue which places all the events taking place in the browser. 
// This can be click events, Ajax calls, callback function, etc and then processed one by one.s
