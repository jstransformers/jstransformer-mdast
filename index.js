'use strict'

const remark = require('remark')
const html = require('remark-html')
const extend = require('extend-shallow')

exports.name = 'remark'
exports.inputFormats = ['markdown', 'md', 'remark']
exports.outputFormat = 'html'

function prepareRemark(options, locals) {
  const processor = remark()
  const opts = extend({}, options, locals)
  const plugins = (opts.plugins && Array.isArray(opts.plugins)) ? opts.plugins : []
  plugins.push(html)
  for (const plugin of plugins) {
    if (plugin) {
      if (typeof plugin === 'string' || plugin instanceof String) {
        processor.use(require(plugin))
      } else {
        processor.use(plugin)
      }
    }
  }
  return processor
}

exports.render = function (str, options, locals) {
  return prepareRemark(options, locals).processSync(str).toString()
}

exports.renderAsync = function (str, options, locals) {
  return new Promise((resolve, reject) => {
    prepareRemark(options, locals)
      .process(str, (err, file) => {
        if (err) {
          return reject(err)
        }
        resolve(file.toString())
      })
  })
}
