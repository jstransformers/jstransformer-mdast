'use strict';

var remark = require('remark');
var html = require('remark-html');
var extend = require('extend-shallow');

exports.name = 'remark';
exports.inputFormats = ['markdown', 'md', 'remark'];
exports.outputFormat = 'html';

exports.render = function (str, options, locals) {
  var processor = remark();
  var opts = extend({}, options, locals);
  var plugins = (opts.plugins && Array.isArray(opts.plugins)) ? opts.plugins : [];
  plugins.push(html);
  plugins.forEach(function (plugin) {
    processor.use(plugin);
  });
  return processor.process(str, opts).contents;
};
