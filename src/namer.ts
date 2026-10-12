import { randomInt } from 'node:crypto'

type RandomInt = (max: number) => number

export function generateName(
  adjectives: readonly string[],
  nouns: readonly string[],
  random: RandomInt = max => randomInt(max),
): string {
  if (adjectives.length === 0 || nouns.length === 0) {
    throw new Error('Word lists must not be empty.')
  }
  return `${adjectives[random(adjectives.length)]}-${nouns[random(nouns.length)]}`
}

export function parseWords(text: string): string[] {
  return text
    .split('\n')
    .map(word => word.trim())
    .filter(Boolean)
}
