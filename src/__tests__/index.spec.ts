import { runAction } from '../runner'

describe('index', () => {
  it(
    'should work [integration]',
    async () => {
      await runAction(
        'https://cdn.jsdelivr.net/gh/overlayed-app/remote-overlay-test@1.1.0/index.js'
      )
    },
    15 * 1000 /* 15 seconds */
  )
})
