# action-element-snapshot

GitHub action to take element screenshots 🖼📷

This GitHub action allows CI/CD validation pipelines to load an element into Chrome (using React 16) and comment the image of the loaded component into a PR.

## Inputs

### source_url

Location of the element.

Ex: `https://cdn.jsdelivr.net/gh/overlayed-app/remote-overlay-test@1.1.0/index.js`

### token

Github token.

Ex: `${{ secrets.GITHUB_TOKEN }}`

## Outputs

### image_url

Location of the screenshot.

Ex: `https://i.imgur.com/ADyk5Gl.png`

## License

MIT
