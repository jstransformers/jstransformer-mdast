'use strict'

const remark = require('remark')
const html = require('remark-html')
const extend = require('extend-shallow')

exports.name = 'remark'
exports.inputFormats = ['markdown', 'md', 'remark']
exports.outputFormat = 'html'

exports.render = function (str, options, locals) {
  const processor = remark()
  const opts = extend({}, options, locals)
  const plugins = (opts.plugins && Array.isArray(opts.plugins)) ? opts.plugins : []
  plugins.push(html)
  plugins.forEach(plugin => {
    processor.use(plugin)
  })
  return processor.process(str, opts).contents
}
