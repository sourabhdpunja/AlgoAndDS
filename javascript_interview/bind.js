// Allows to bind this context of a function to particular object
/*
Use .bind() when you want that function to later be called with a certain context, useful in events. Use .call() or .apply() when you want to invoke the function immediately, and modify the context.

Call/apply call the function immediately, whereas bind returns a function that, when later executed, will have the correct context set for calling the original function. This way you can maintain context in async callbacks and events.
*/
this.distance = 10000;
const roadTrip1 = {
    distance: 3000,
    getDistance: function (unit, caption) {
        return this.distance + unit + caption;
    }
};

const roadTrip2 = {
    distance: 5000
};

const getTripDistance = roadTrip1.getDistance.bind(roadTrip2, 'km');

getTripDistance(' in total');