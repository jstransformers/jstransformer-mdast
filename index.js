'use strict';

var mdast = require('mdast')();
var merge = require('merge-deep');

exports.name = 'mdast';
exports.inputFormats = ['markdown', 'md', 'mdast'];
exports.outputFormat = 'markdown';

exports.render = function (str, options, locals) {
  var opts = merge({}, options, locals);
  var plugins = opts.plugins && Array.isArray(opts.plugins) ? opts.plugins : [];
  plugins.forEach(function (plugin) {
    mdast.use(plugin, opts);
  });
  return mdast.process(str, opts);
};
