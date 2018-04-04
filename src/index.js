#!/usr/bin/env node
const program = require('commander')
const chalk = require('chalk')
const loadOptions = require('./lib/loadOptions')
const genLine = require('./lib/tools').genLine

program
  .version(require('../package').version)
  .usage(`${chalk.green('[options]')}`)
  .option('-l, --list', 'show all.')
  .option('-p, --province <provinceName>', 'specify the abbreviation of the provice.')
  .option('-t, --test', 'run the test data.')
  .option('-a, --author', 'show the info of author.')
  // .option('-i, --item', 'show the specific company. the priority of this option is higher than "-a, --all"')
  .parse(process.argv)

// add some useful info on help
program.on('--help', () => {
  console.log()
  console.log(`  Run ${chalk.cyan(`cbl <command> --help`)} for detailed usage of given command.`)
  console.log()
})

// if there is no param, output the help info.
if (!process.argv.slice(2).length) {
  console.log(`  🧐  something might be wrong, pls check the help info as follows:`)
  program.outputHelp()
  console.log(`  🎉  Enjoy the usage of the tool, and find a better job.`)
  console.log()
  console.log(`  ${genLine(20, '-')}`)
  require('./lib/authorInfo')
}

// loadOptions
loadOptions(program)
