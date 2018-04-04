const draw = require('./draw')
const noData = require('./tools').noData

function list () {
  if (!Object.keys(Symbol.data).length) {
    return noData()
  }

  for (let key in Symbol.data) {
    draw(Symbol.data[key]['zh'] || key, Symbol.data[key]['companies'])
  }
}

list()