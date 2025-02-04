import * as core from '@actions/core'
import { generate } from '@farts/release-namer'

try {
  const output = generate()
  console.log(`Generated name: ${output}`)
  core.setOutput('name', output)
} catch (error) {
  const message =
    error instanceof Error ? error.message : 'Something went terribly wrong.'
  core.setFailed(message)
}
