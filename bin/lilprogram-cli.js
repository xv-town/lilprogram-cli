#!/usr/bin/env node

const path = require('path');
const program = require('commander');
const main = require(path.join(__dirname, '../main'));

const mapActions = {
  build: {
    alias: 'b',
    description: 'build files',
    example: [
      'lil-cli build, lil-cli b',
    ]
  },
  watch: {
    alias: 'w',
    description: 'observe files change',
    example: [
      'lil-cli watch, lil-cli w',
    ]
  },
  '*': {
    alias: '',
    description: 'command not found',
    example: []
  }
};

Reflect.ownKeys(mapActions).forEach((action) => {
  program.command(action)
    .alias(mapActions[action].alias) // 解析命令别名
    .description(mapActions[action].description) // 命令对应的描述
    .action(() => {
      if (action === '*') {
        console.log(mapActions[action].description);
      } else {
        main(action);
      }
    })
});
program.on('--help', () => {
  console.log('\nexample: ')
  Reflect.ownKeys(mapActions).forEach((action) => {
    mapActions[action].example.forEach(example => {
      console.log(`  ${example}`);
    })
  });
})
// 解析传递参数
program.parse(process.argv);

// console.log(process.argv)
