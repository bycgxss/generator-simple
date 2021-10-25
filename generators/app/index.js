// 此文件作为 Generator 的核心入口
// 需要导出一个继承自 Yeoman Generator 的类型
// Yeoman Generator 在工作时会自动调用我们在此类型中定义的一些声明周期方法
// 我们在这些方法中可以通过调用父类提供的一些工具方法实现一些功能，例如文件写入

const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  prompting () {
    // Yeoman 在询问用户环节会自动调用此方法
    // 在此方法中可以调用父类的 promat() 方法发出对用户的命令行询问
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname // appname 为项目生成目录名称
      }
    ])
    .then(answers => {
      // answers => { name: 'user input value'; }
      this.answers = answers
    })
  }

  writing () {
    // Yeoman 自动在生成文件阶段调用此方法
    // 我们这里尝试往项目目录中写入文件
    // this.fs.write(
    //   this.destinationPath('temp.txt'),
    //   Math.random().toString()
    // )

    // 通过模版方式写入文件到目标目录
    
    // // 模版文件路径
    // const temp = this.templatePath('foo.txt')
    // // 输出目标路径
    // const output = this.destinationPath('foo.txt')
    // // 模版数据上下文
    // const context = { title: 'Hello world', success: false }
    
    // this.fs.copyTpl(temp, output, context)

    // ------------------------------------------------

    // 模版文件路径
    const temp = this.templatePath('bar.html')
    // 输出目标路径
    const output = this.destinationPath('bar.html')
    // 模版数据上下文
    const context = this.answers
    
    this.fs.copyTpl(temp, output, context)
  }
}