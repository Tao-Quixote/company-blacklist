const chalk = require('chalk')

function noData () {
  console.log()
  console.log(`😫  ${chalk.red('The data you are searching for is empty. Waitting for more info.')}`)
  console.log()
  console.log(`💥  ${chalk.green('We are looking for more infomations,')}`)
  console.log(`🍀  ${chalk.green('so if you have info, pls pull request at:')}`)
  console.log(`🕸  https://github.com/Tao-Quixote/company-blacklist`)
}

function consoleAuthorInfo () {
  console.log()
  console.log(`  📮 Author Info:`)
  console.log(`    Tao-Quixote`)
  console.log(`    GitHub: https://github.com/Tao-Quixote`)
  console.log(`    e-mail: <web.taox@gmail.com>`)
  console.log()
}

function genLine (num, sym) {
  let str = ''
  if (process.version < 'v8') {
    while(num-- > 0) {
      str += sym
    }
    return str
  }

  return ''.padEnd(num, sym)
}

module.exports = {
  noData,
  consoleAuthorInfo,
  genLine
}