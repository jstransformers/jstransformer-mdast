# jstransformer-mdast

[mdast](https://github.com/wooorm/mdast) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-mdast/master.svg)](https://travis-ci.org/jstransformers/jstransformer-mdast)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-mdast/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-mdast?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-mdast/master.svg)](http://david-dm.org/jstransformers/jstransformer-mdast)
[![NPM version](https://img.shields.io/npm/v/jstransformer-mdast.svg)](https://www.npmjs.org/package/jstransformer-mdast)

## Installation

    npm install jstransformer-mdast

## API

```js
var mdast = require('jstransformer')(require('jstransformer-mdast'));

mdast.render('Some *emphasis*, **strongness**, and `code`').body
//=> 'Some _emphasis_, **strongness**, and `code`'
```

## License

MIT
