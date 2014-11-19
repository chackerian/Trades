//Spec test
'use strict';
describe('All I need in this life of sin is me and my girlfriend', function(){
	var a;
	it('This is the individual spec', function(){
		expect(a).toBe(true);
	});

	it('Bla Bla Bla', function(){
		var a = 100;
		//(a === 100) ? a=200 : 123;
		expect(a).toBe(200);

	});

	it('toBe matcher', function(){
		expect(true).toBe(true);

	});
	it('isit22', function(){
		var a = 12;
		var b = a;
		expect(a).toBe(b);
		expect(a).not.toBe(122);
	});

	beforeEach(function(){
		//var a = 23;
	});
});
