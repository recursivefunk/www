#!/usr/bin/env node

const shell = require('shelljs')
const env = require('good-env')
const endsWithAny = (suffixes, string) => suffixes.some(s => string.endsWith(s))
const extentions = ['.js', '.vue', '.scss']
let sourceChanged
let cfId
let files

env.ensure('WEB_CF_ID')
cfId = env.get('WEB_CF_ID')

console.log('\n============ CHANGES ============\n')
files = shell.exec('git diff --name-only HEAD~1').split('\n')
codeChanged = files.some(f => endsWithAny(extentions, f))
console.log('\n=================================\n')

if (codeChanged) {
  if (shell.exec('./node_modules/.bin/serverless deploy -v --staging production').code !== 0) {
    shell.exec(`aws cloudfront create-invalidation --distribution-id ${cfId} --paths "/*"`)
  }
} else {
  console.log(`No source code changes. We're done, here.`)
}
