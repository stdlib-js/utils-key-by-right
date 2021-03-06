/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable object-curly-newline, object-property-newline */

'use strict';

// MODULES //

var tape = require( 'tape' );
var noop = require( '@stdlib/utils-noop' );
var Float64Array = require( '@stdlib/array-float64' );
var keyByRight = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof keyByRight, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a collection', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {},
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			keyByRight( value, noop );
		};
	}
});

tape( 'the function throws an error if not provided a function to invoke', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			keyByRight( [ 1, 2, 3 ], value );
		};
	}
});

tape( 'if provided an empty collection, the function never invokes a provided function', function test( t ) {
	var arr = [];

	function foo() {
		t.fail( 'should not be invoked' );
	}

	keyByRight( arr, foo );

	t.deepEqual( arr, [], 'expected result' );
	t.end();
});

tape( 'the function returns an object', function test( t ) {
	var arr;
	var out;

	function toKey( v ) {
		t.pass( 'invoked provided function' );
		return v;
	}

	arr = [ 1, 2, 3 ];

	out = keyByRight( arr, toKey );

	t.strictEqual( typeof out, 'object', 'returns an object' );
	t.end();
});

tape( 'the function converts a collection to an object (array)', function test( t ) {
	var expected;
	var arr;
	var out;

	function toKey( value ) {
		return value.name;
	}

	arr = [
		{ 'name': 'v0', 'value': 1 },
		{ 'name': 'v1', 'value': 2 },
		{ 'name': 'v2', 'value': 3 }
	];
	expected = {
		'v2': arr[ 2 ],
		'v1': arr[ 1 ],
		'v0': arr[ 0 ]
	};

	out = keyByRight( arr, toKey );

	t.deepEqual( out, expected, 'expected result' );
	t.end();
});

tape( 'the function converts a collection to an object (array-like object)', function test( t ) {
	var expected;
	var arr;
	var out;

	function toKey( value ) {
		return value.name;
	}

	arr = {
		'length': 3,
		'0': { 'name': 'v0', 'value': 1 },
		'1': { 'name': 'v1', 'value': 2 },
		'2': { 'name': 'v2', 'value': 3 }
	};
	expected = {
		'v2': arr[ 2 ],
		'v1': arr[ 1 ],
		'v0': arr[ 0 ]
	};

	out = keyByRight( arr, toKey );

	t.deepEqual( out, expected, 'expected result' );
	t.end();
});

tape( 'the function converts a collection to an object (typed array)', function test( t ) {
	var expected;
	var arr;
	var out;

	function toKey( value, index ) {
		return index;
	}

	arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	expected = {
		'2': 3.0,
		'1': 2.0,
		'0': 1.0
	};

	out = keyByRight( arr, toKey );

	t.deepEqual( out, expected, 'expected result' );
	t.end();
});

tape( 'the function supports providing an execution context', function test( t ) {
	var ctx;
	var arr;

	function toKey( value ) {
		/* eslint-disable no-invalid-this */
		this.sum += value;
		this.count += 1;
		return value;
	}

	ctx = {
		'sum': 0,
		'count': 0
	};
	arr = [ 1.0, 2.0, 3.0 ];

	keyByRight( arr, toKey, ctx );

	t.strictEqual( ctx.sum/ctx.count, 2.0, 'expected result' );

	t.end();
});

tape( 'the function iterates from right to left', function test( t ) {
	var indices;
	var values;
	var arr;
	var i;

	arr = [ 1, 2, 3, 4 ];
	values = [ 4, 3, 2, 1 ];
	indices = [ 3, 2, 1, 0 ];
	i = -1;

	function verify( value, index ) {
		i += 1;
		t.strictEqual( index, indices[ i ], 'provides expected index' );
		t.strictEqual( value, values[ i ], 'provides expected value' );
	}

	keyByRight( arr, verify );
	t.end();
});

tape( 'the function does not skip empty elements', function test( t ) {
	var indices;
	var values;
	var arr;
	var i;

	arr = [ 1, , , 4 ]; // eslint-disable-line no-sparse-arrays
	values = [ 4, void 0, void 0, 1 ];
	indices = [ 3, 2, 1, 0 ];
	i = -1;

	function verify( value, index ) {
		i += 1;
		t.strictEqual( index, indices[ i ], 'provides expected index' );
		t.strictEqual( value, values[ i ], 'provides expected value' );
	}

	keyByRight( arr, verify );
	t.end();
});
