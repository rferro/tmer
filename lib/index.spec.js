const tmer = require('../')
const { test } = require('tap')

test('should be a function', t => {
  t.plan(1)
  t.type(tmer, 'function')
})

test('should by override formatDefault', t => {
  t.plan(3)
  const tmerNow = tmer(false, milliseconds => 1)
  t.strictEqual(tmerNow(true), 1)
  t.strictEqual(tmerNow(true), 1)
  t.strictEqual(tmerNow(true), 1)
})

test('should by format', t => {
  t.plan(3)
  const tmerNow = tmer(true, milliseconds => 1)
  t.strictEqual(tmerNow(), 1)
  t.strictEqual(tmerNow(), 1)
  t.strictEqual(tmerNow(), 1)
})
