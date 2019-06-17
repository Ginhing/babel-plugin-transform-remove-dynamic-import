'use strict'

module.exports = function() {
  return {
    name: 'transform-remove-dynamic-import',
    visitor: {
      Import(path) {
        path.remove()
      },
    },
  }
}
