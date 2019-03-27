console.log(900.9 === 300.3 * 3);// false

console.log(900.9 === 300.3 * 3);// false
console.log(300.3 * 3); // 900.90000001
console.log(Number((300.3 * 3).toFixed(2)));
console.log(Number((300.3 * 3).toPrecision(12)));
console.log(((300.3 * 10) * 3) / 10);