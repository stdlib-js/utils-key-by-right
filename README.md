<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# keyByRight

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert a collection to an object whose keys are determined by a provided function and whose values are the collection values, iterating from right to left.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-key-by-right
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var keyByRight = require( '@stdlib/utils-key-by-right' );
```

#### keyByRight( collection, fcn\[, thisArg ] )

Converts a `collection` to an object whose keys are determined by a provided `function` and whose values are the `collection` values, iterating from right to left.

<!-- eslint-disable object-curly-newline -->

```javascript
function toKey( value ) {
    return value.a;
}

var arr = [
    { 'a': 1 },
    { 'a': 2 }
];

var out = keyByRight( arr, toKey );
// returns { '2': { 'a': 2 }, '1': { 'a': 1 } }
```

The invoked `function` is provided two arguments:

-   `value`: collection element
-   `index`: collection index

To set the function execution context, provide a `thisArg`.

```javascript
function toKey( value, index ) {
    this.sum += value;
    this.count += 1;
    return index;
}

var arr = [ 1, 2, 3, 4 ];

var context = {
    'sum': 0,
    'count': 0
};

var out = keyByRight( arr, toKey, context );
// returns { '3': 4, '2': 3, '1': 2, '0': 1 }

var mean = context.sum / context.count;
// returns 2.5
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A `collection` may be either an [`Array`][mdn-array], [`Typed Array`][mdn-typed-array], or an array-like [`Object`][mdn-object] (excluding `strings` and `functions`).
-   If more than one element in a `collection` resolves to the same key, the key value is the `collection` element which last resolved to the key.
-   Object values are shallow copies.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var keyByRight = require( '@stdlib/utils-key-by-right' );

var arr;
var obj;
var i;

function toKey( value ) {
    return value.name;
}

arr = new Array( 100 );
for ( i = 0; i < arr.length; i++ ) {
    arr[ i ] = {
        'name': 'v'+i,
        'value': i
    };
}

obj = keyByRight( arr, toKey );
console.log( obj );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/for-each-right`][@stdlib/utils/for-each-right]</span><span class="delimiter">: </span><span class="description">invoke a function for each element in a collection, iterating from right to left.</span>
-   <span class="package-name">[`@stdlib/utils/key-by`][@stdlib/utils/key-by]</span><span class="delimiter">: </span><span class="description">convert a collection to an object whose keys are determined by a provided function and whose values are the collection values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-key-by-right.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-key-by-right

[test-image]: https://github.com/stdlib-js/utils-key-by-right/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/utils-key-by-right/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-key-by-right/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-key-by-right?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-key-by-right.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-key-by-right/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-key-by-right/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-key-by-right/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-key-by-right/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-key-by-right/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[mdn-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

<!-- <related-links> -->

[@stdlib/utils/for-each-right]: https://github.com/stdlib-js/utils-for-each-right

[@stdlib/utils/key-by]: https://github.com/stdlib-js/utils-key-by

<!-- </related-links> -->

</section>

<!-- /.links -->
