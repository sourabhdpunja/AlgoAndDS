var num = 50;

function logNumber() {
    console.log(num); // undefined
    var num = 100;
}

logNumber();