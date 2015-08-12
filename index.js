'use strict';

var mdast = require('mdast')();
var merge = require('merge-deep');

exports.name = 'mdast';
exports.inputFormats = ['markdown', 'md', 'mdast'];
exports.outputFormat = 'markdown';

exports.render = function (str, options, locals) {
  var opts = merge({}, options, locals)
  var plugins = opts.plugins && Array.isArray(plugins) ? plugins : [plugins]

  plugins.filter(Boolean).forEach(function (plugin) {
    mdast.use(plugin, opts)
  })
  return mdast.process(str, opts)
};
