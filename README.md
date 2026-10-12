# Random, Rugged, Release Name Generator as a GitHub Action

This action randomly creates a rugged name and exposes it as a step output. Names are an adjective and a noun drawn at random from our own word lists in `src/words/`, which started life as the rugged lists from [namor](https://github.com/jsonmaur/namor) (MIT). Expect them to be a touch bawdy.

## Outputs

### `name`

The randomly generated rugged name.

## Example Usage

```yaml
- uses: tadger/gh-action-release-namer@v1
```

```yaml
- uses: tadger/gh-action-release-namer@v1
  id: namer
- run: echo "Your rugged name shall be ${{ steps.namer.outputs.name }} - ENJOY"
```

## Trying it locally

```sh
npm run generate                       # one name, built-in lists
npm run generate -- -n 5 -d _          # five names joined with "_"
npm run generate -- -a my-adjectives.txt -o my-nouns.txt
npm run generate -- --help
```

Options: `-n/--count`, `-d/--delimiter`, `-a/--adjectives <file>`, `-o/--nouns <file>`. Word list files are one word per line.
