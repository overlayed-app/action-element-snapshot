import { setOutput } from '@actions/core'
import { context, GitHub } from '@actions/github'
import render from './renderer'
import upload from './uploader'

export async function runAction(source_url: string, token?: string) {
  const url = await upload(await render(source_url))

  setOutput('image_url', url)

  if (token && context.eventName === 'pull_request') {
    const pr = context.issue

    const client = new GitHub(token)
    await client.pulls.createReview({
      ...pr,
      event: 'COMMENT',
      body: `Hello. I rendered the referenced component as part of Validation. Here it is:\n[Element Rendering Preview](${url})\n> Source: ${source_url}`,
    })
  }
}
