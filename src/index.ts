import * as core from '@actions/core'
import { generateName, parseWords } from './namer.js'
import adjectivesText from './words/adjectives.txt'
import nounsText from './words/nouns.txt'

try {
  const output = generateName(parseWords(adjectivesText), parseWords(nounsText))
  console.log(`Generated name: ${output}`)
  core.setOutput('name', output)
} catch (error) {
  const message =
    error instanceof Error ? error.message : 'Something went terribly wrong.'
  core.setFailed(message)
}
