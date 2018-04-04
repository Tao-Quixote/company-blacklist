const chalk = require('chalk')

// output single one
function drawCompany (c) {
  console.log()
  if (c['cname']) console.log(`公司名称：${c['cname']}`)
  if (c['title']) console.log(`职位：${c['title']}`)
  if (c['affair']) console.log(`事件：${c['affair']}`)
  if (c['path']) console.log(`事件截图：${c['path']}`)
  if (c['curl']) console.log(`公司网址：${c['curl']}`)
  if (c['caddr']) console.log(`公司地址：${c['caddr']}`)
}

// output all companies info
function forEachCompanies (cs) {
  if (!Array.isArray(cs)) {
    drawCompany(cs)
    return
  }

  cs.forEach(item => {
    drawCompany(item)
  })
}

module.exports = (province = '无', companies) => {
  console.log(`${'='.padEnd(40, '=')}`)

  console.log(`省份：${province}`)

  forEachCompanies(companies)

  console.log()
}