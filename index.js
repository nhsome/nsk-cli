#!/usr/bin/env node

const { Command } = require('commander')
  createApp = require('./src/createApp')

const program = new Command()

async function execCommand(callback, ...args) {
  try {
    const result = callback(...args)
    if (result instanceof Promise) {
      await result
    }
  } catch(err) {
    console.error(err)
  }
}

program
  .command('create-app <appName>')
  .description('Clone a repository into a newly created directory')
  .action((...args) => execCommand(createApp, ...args))

program.parse(process.argv)

process.on('unhandledRejection', err => {
  console.error(err)
  process.exit(1)
})
