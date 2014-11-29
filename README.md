es7-async-fn
===============

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]
[![Gittip][gittip-image]][gittip-url]

Fork of [es7-async-await](https://github.com/benjamn/es7-async-await) for [ecstacy](https://github.com/polyfills/ecstacy) usage.

Transformer that converts `async` functions and `await` expressions into ECMAScript 6 generator functions and `yield` expressions.

Note that this transform is only really useful if you know you're targeting a platform that supports generator functions natively. Otherwise, you're better off using [Regenerator](https://github.com/facebook/regenerator), since it has the ability to transform `async` functions into ES5 without creating immediately-invoked `GeneratorFunction`s.

[npm-image]: https://img.shields.io/npm/v/es7-async-fn.svg?style=flat-square
[npm-url]: https://npmjs.org/package/es7-async-fn
[github-tag]: http://img.shields.io/github/tag/polyfills/es7-async-fn.svg?style=flat-square
[github-url]: https://github.com/polyfills/es7-async-fn/tags
[travis-image]: https://img.shields.io/travis/polyfills/es7-async-fn.svg?style=flat-square
[travis-url]: https://travis-ci.org/polyfills/es7-async-fn
[coveralls-image]: https://img.shields.io/coveralls/polyfills/es7-async-fn.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/polyfills/es7-async-fn
[david-image]: http://img.shields.io/david/polyfills/es7-async-fn.svg?style=flat-square
[david-url]: https://david-dm.org/polyfills/es7-async-fn
[license-image]: http://img.shields.io/npm/l/es7-async-fn.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/es7-async-fn.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/es7-async-fn
[gittip-image]: https://img.shields.io/gratipay/jonathanong.svg?style=flat-square
[gittip-url]: https://gratipay.com/jonathanong/
