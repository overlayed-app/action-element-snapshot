import puppeteer from 'puppeteer'
import { readFileSync } from 'fs'

const isCi = process.env.CI === '1' || process.env.CI === 'true'

/**
 * Screenshot a react component
 * @param url url to render from
 * @returns screenshot encoded as base64
 */
export default async function(url: string) {
  const browser = await puppeteer.launch({
    defaultViewport: {
      width: 1920,
      height: 1080,
    },
    args: isCi ? ['--no-sandbox', '--disable-setuid-sandbox'] : [],
  })
  const page = await browser.newPage()
  await page.goto(`file:///${__dirname}/renderer-tmpl.html`)

  const rawFn = readFileSync(`${__dirname}/renderer-logic.js`, 'utf-8')

  await page.evaluate(`(${rawFn})("#app", "${url}")`)

  const appDims = JSON.parse(
    (await page.evaluate(
      `JSON.stringify(document.getElementById("app").getBoundingClientRect())`
    )) as string
  )

  if (appDims.width === 0) {
    throw new Error(`Element not found in page (width === 0).`)
  }

  const screenshot = await page.screenshot({
    encoding: 'base64',
    clip: appDims,
    omitBackground: true,
  })

  await browser.close()

  return screenshot
}
