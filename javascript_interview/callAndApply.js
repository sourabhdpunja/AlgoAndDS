const car1 = {
    brand: 'Porsche',
    getCarDescription: function (cost, year, color) {
        console.log(`This car is a ${this.brand}. The price is $${cost}. The year is ${year}. The color is ${color}.\n`);
    }
};

const car2 = {
    brand: 'Lamborghini'
};

const car3 = {
    brand: 'Ford'
};

car1.getCarDescription(80000, 2010, 'blue');
// Call method is attached to any function in javascript.
// Alternate way to call the function. instead of the usual way.
// Different way to pass arguments into function. Change the this context.
car1.getCarDescription.call(car2, 200000, 2013, 'yellow');
// Apply method passes parameters as Array.
car1.getCarDescription.apply(car3, [35000, 2012, 'black']);