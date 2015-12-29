# jstransformer-remark

[Remark](http://npm.im/remark) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-remark/master.svg)](https://travis-ci.org/jstransformers/jstransformer-remark)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-remark/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-remark?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-remark/master.svg)](http://david-dm.org/jstransformers/jstransformer-remark)
[![NPM version](https://img.shields.io/npm/v/jstransformer-remark.svg)](https://www.npmjs.org/package/jstransformer-remark)

## Installation

    npm install jstransformer-remark

## API

```js
var remark = require('jstransformer')(require('jstransformer-remark'));

remark.render('Some *emphasis*, **strongness**, and `code`').body
//=> '<p>Some <em>emphasis</em>, <strong>strongness</strong>, and <pre>code</pre></p>'
```

## License

MIT
