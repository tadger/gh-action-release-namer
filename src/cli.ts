import { readFileSync } from 'node:fs'
import { parseArgs } from 'node:util'
import { generateName, parseWords } from './namer.js'
import adjectivesText from './words/adjectives.txt'
import nounsText from './words/nouns.txt'

const USAGE = `Usage: npm run generate -- [options]

Options:
  -n, --count <n>          number of names to generate (default: 1)
  -d, --delimiter <str>    string between adjective and noun (default: -)
  -a, --adjectives <file>  word list file to use instead of the built-in adjectives
  -o, --nouns <file>       word list file to use instead of the built-in nouns
  -h, --help               show this help`

const loadWords = (file: string | undefined, fallback: string) =>
  parseWords(file ? readFileSync(file, 'utf8') : fallback)

try {
  const { values } = parseArgs({
    options: {
      count: { type: 'string', short: 'n', default: '1' },
      delimiter: { type: 'string', short: 'd', default: '-' },
      adjectives: { type: 'string', short: 'a' },
      nouns: { type: 'string', short: 'o' },
      help: { type: 'boolean', short: 'h', default: false },
    },
  })

  if (values.help) {
    console.log(USAGE)
  } else {
    const count = Number(values.count)
    if (!Number.isInteger(count) || count < 1) {
      throw new Error(
        `--count must be a positive integer, got "${values.count}"`,
      )
    }
    const adjectives = loadWords(values.adjectives, adjectivesText)
    const nouns = loadWords(values.nouns, nounsText)
    for (let i = 0; i < count; i++) {
      console.log(generateName(adjectives, nouns, undefined, values.delimiter))
    }
  }
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error))
  console.error(USAGE)
  process.exitCode = 1
}
