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
