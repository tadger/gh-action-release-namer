import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import { generateName, parseWords } from './namer.js'

const load = (name: string) =>
  parseWords(readFileSync(`src/words/${name}.txt`, 'utf8'))

for (const name of ['adjectives', 'nouns']) {
  test(`${name} list is non-empty, lowercase, single-word, unique`, () => {
    const words = load(name)
    assert.ok(words.length > 0)
    assert.equal(new Set(words).size, words.length)
    for (const w of words) assert.match(w, /^[a-z]+$/)
  })
}

test('generateName joins adjective and noun', () => {
  assert.equal(
    generateName(['a', 'b'], ['x', 'y'], () => 1),
    'b-y',
  )
})

test('generateName rejects empty lists', () => {
  assert.throws(() => generateName([], ['x']))
})

test('generateName honours a custom delimiter', () => {
  assert.equal(
    generateName(['a'], ['x'], () => 0, '_'),
    'a_x',
  )
})
