const draw = require('./draw')
const noData = require('./tools').noData

function province (p) {
  let r = Symbol.data[p]
  if (!r) {
    return noData()
  }

  draw(r['zh'], r['companies'])
}

module.exports = province
