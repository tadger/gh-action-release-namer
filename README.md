# Random, Rugged, Release Name Generator as a GitHub Action

This action randomly creates a rugged name and exposes it as a step output. [@farts/release-namer](https://github.com/tadger/release-namer) is used to generate the name that is so rugged.

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
