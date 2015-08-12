# jstransformer-mdast [![The MIT License][license-img]][license-url]

[mdast](https://github.com/wooorm/mdast) support for [JSTransformers][jstransformers-url]

[![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url] [![npmjs.com][npmjs-img]][npmjs-url]


## Install
```
npm install jstransformer-mdast --save
```


## Usage
> For more use-cases see the **tests** in [test folder](./test) or see the [JSTransformer API](http://github.com/jstransformers/jstransformer#api) for more details.

```js
var mdast = require('jstransformer')(require('jstransformer-mdast'));

mdast.render('Some *emphasis*, **strongness**, and `code`').body
//=> 'Some _emphasis_, **strongness**, and `code`'
```


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jstransformers/jstransformer-mdast/issues/new).


## License
[The MIT License][license-url]


[npmjs-url]: https://www.npmjs.com/package/jstransformer-mdast
[npmjs-img]: https://img.shields.io/npm/v/jstransformer-mdast.svg

[license-url]: ./LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg

[travis-url]: https://travis-ci.org/jstransformers/jstransformer-mdast
[travis-img]: https://img.shields.io/travis/jstransformers/jstransformer-mdast.svg

[coveralls-url]: https://coveralls.io/r/jstransformers/jstransformer-mdast
[coveralls-img]: https://img.shields.io/coveralls/jstransformers/jstransformer-mdast.svg

[david-url]: https://david-dm.org/jstransformers/jstransformer-mdast
[david-img]: https://img.shields.io/david/jstransformers/jstransformer-mdast.svg

[jstransformers-url]: http://github.com/jstransformers
