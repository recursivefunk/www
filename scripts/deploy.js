#!/usr/bin/env node

const shell = require('shelljs')
const env = require('good-env')
let cfId

env.ensure('WEB_CF_ID')

cfId = env.get('WEB_CF_ID')

const endsWithAny = (suffixes, string) => (
  suffixes.some(s => string.endsWith(s))
)

const extentions = ['.js', '.vue', '.scss']
const files = shell.exec('git diff --name-only HEAD~1').split('\n')
const codeChanged = files.some(f => {
  if (endsWithAny(extentions, f)) {
    return true
  }
})

if (codeChanged) {
  if (shell.exec('./node_modules/.bin/serverless deploy -v --staging production').code !== 0) {
    shell.exec(`aws cloudfront create-invalidation --distribution-id ${cfId} --paths "/*"`)
  }
} else {
  console.log(`No source code changes. We're done, here.`)
}
