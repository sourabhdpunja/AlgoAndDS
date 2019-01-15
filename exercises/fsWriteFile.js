var fs = require('fs');


var data = "New File Contents";

fs.writeFile('temp.txt', data, function(err, data){
    if (err) console.log(err);
    console.log("Successfully Written to File.");
});

// Asynchronous read
fs.readFile('temp.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

// // Synchronous read
// var data = fs.readFileSync('input.txt');
// console.log("Synchronous read: " + data.toString());

console.log("Program Ended");