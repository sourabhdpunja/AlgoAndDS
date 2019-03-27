console.log([10, 20, 30, 40, 50].indexOf(30)); // 2
console.log([{ name: 'Pam' }, { name: 'Kent' }].indexOf({ name: 'Kent' })); // -1 // two objects are never the same
console.log('hello world'.indexOf('o'));// 4
console.log([[1], [2], [3], [4]].indexOf([2])); // -1 // two objects are never the same