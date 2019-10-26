const {prompt} = require('inquirer')
const program = require('commander')
const chalk = require('chalk')
const download = require('download-git-repo')
const ora = require('ora')
const fs = require('fs')
const path = require('path')

const option =  program.parse(process.argv).args[0]
const defaultName = typeof option === 'string' ? option : 'common'
const tplList = require(`${__dirname}/../templates`)
const tplLists = Object.keys(tplList) || [];
const question = [
  {
    type: 'input',
    name: 'name',
    message: '请输入生成的目录名称  默认为common',
    default: defaultName,
    filter(val) {
      return val.trim()
    },
    validate(val) {
      const validate = (val.trim().split(" ")).length === 1
      return validate || 'name is not allowed to have spaces ';
    },
    transformer(val) {
      return val;
    }
  }, {
    type: 'list',
    name: 'template',
    message: '请选择模板 默认scss-template',
    choices: tplLists,
    default: tplLists[0],
    validate(val) {
      return true;
    },
    transformer(val) {
      return val;
    }
  }
]
module.exports = prompt(question).then(({name, template}) => {
  const projectName = name;
  const templateName = template;
  const gitPlace = tplList[templateName]['place'];
  const gitBranch = tplList[templateName]['branch'];
  const spinner = ora('Downloading please wait...');
  spinner.start();
  download(`${gitPlace}${gitBranch}`, `./${projectName}`, (err) => {
    if (err) {
      console.log(chalk.red(err))
      process.exit()
    }
    console.log('模板已生成!')
    spinner.stop();
  })
})
