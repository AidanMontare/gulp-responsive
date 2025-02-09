'use strict'

// eslint-disable-next-line
const assert = require('assert')
const path = require('path')
const fs = require('fs')
const Vinyl = require('vinyl')

function makeFile (name, file) {
  if (!file) {
    file = name
  }
  return new Vinyl({
    base: path.join(__dirname, '/fixtures'),
    path: path.join(__dirname, '/fixtures/', name),
    contents: fs.readFileSync(path.join(__dirname, '/fixtures/', file))
  })
}

function assertFile (file) {
  assert(file)
  assert(file.base)
  assert(file.path)
  assert(file.contents)
}

exports.makeFile = makeFile
exports.assertFile = assertFile

// Force mute gulp logger in test environment
// This code was removed because it is currently unused.
