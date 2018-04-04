const province = require('./province')
const data = require('../data.json')
const testData = require('../data/test.json')

function loadOptions (program) {
  // -t, --test
  if (program.test) { Symbol.data = testData } else { Symbol.data = data }

  // -l, --list
  if (program.list) require('./list')

  // -p, --province
  if (program.province) province(program.province)

  // -a, --author
  if (program.author) require('./authorInfo')
}

module.exports = loadOptions
