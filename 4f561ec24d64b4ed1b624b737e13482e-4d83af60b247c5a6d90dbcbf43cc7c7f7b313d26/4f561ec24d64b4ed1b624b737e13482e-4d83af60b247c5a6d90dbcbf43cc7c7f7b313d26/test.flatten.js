mocha.setup('bdd');
const expect = chai.expect;

describe('flatten()', function () {
	it('should flatten a simple nested object', function () {
		const source = {
			foo: {
				bar: 1
			}
		};

		const expected = {
			'foo.bar': 1
		};

		expect(flatten(source)).to.deep.equal(expected);
	});

	it('should flatten an object with nested arrays', function () {
		const source = {
			foo: [{
				bar: 1
			}, {
				bar: 2
			}]
		};

		const expected = {
			'foo.0.bar': 1,
			'foo.1.bar': 2
		};

		expect(flatten(source)).to.deep.equal(expected);
	});

	it('should flatten a complex nested object', function () {
		const source = {
			a: 1,
			b: {
				c: true,
				d: {
					e: 'foo'
				}
			},
			f: false,
			g: ['red', 'green', 'blue'],
			h: [{
				i: 2,
				j: 3
			}]
		};

		const expected = {
			'a': 1,
			'b.c': true,
			'b.d.e': 'foo',
			'f': false,
			'g.0': 'red',
			'g.1': 'green',
			'g.2': 'blue',
			'h.0.i': 2,
			'h.0.j': 3
		};

		expect(flatten(source)).to.deep.equal(expected);
	});

	it('should flatten an object with null values', function () {
		const source = {
			foo: {
				bar: null
			}
		};

		const expected = {
			'foo.bar': null
		};

		expect(flatten(source)).to.deep.equal(expected);
	});
});

mocha.run();
