const data1 = 'Jordan Smith';

const data2 = [].filter.call(data1, function (elem, index) {
    return index > 6;
});

console.log(data2);// ['S', 'm', 'i', 't', 'h']
// only use 'read-only' methods: filter, forEach, map, some, every, etc.
// cannot use: push, pop, splice, shift, reverse, etc.