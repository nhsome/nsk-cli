'use strict'

const ghdownload = require('github-download'),
  gitHubRepoSettings = { user: 'nhsome', repo: 'node-starter-kit', ref: 'master' }

function downloadRepo(destination) {
  return new Promise((resolve, reject) => {
    ghdownload(gitHubRepoSettings, destination)
      .on('error', reject)
      .on('end', resolve)
  })
}

module.exports = async function(appName) {
  const appPath = `${process.cwd()}/${appName}`
  await downloadRepo(appPath)
}
