
// object literal syntax
const myBoat = {
    length: 24,
    maxSpeed: 45,
    passengers: 14,
    getLength: function () {
        return this.length;
    }
};



// 2nd Way.
class Vehicle {
    constructor(name, maker, engine) {
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }
    start() {
        console.log("Starting...");
    }
}
let bike = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
bike.start();    //Output: Starting...
/* Adding method brake() later to the created object */
bike.brake = function () {
    console.log("Applying Brake...");
}
bike.brake();    //Output: Applying Brake...

// new keyword & Object constructor
const student = new Object();

student.grade = 12;
student.gradePointAverage = 3.7;
student.classes = ["English", "Algebra", "Chemistry"];
student.getClasses = function () {
    return this.classes;
};