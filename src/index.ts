import core from '@actions/core'
import { runAction } from './runner'

runAction(core.getInput('source_url'), core.getInput('token'))
  .then(() => {
    console.log('Success.')
  })
  .catch(ex => {
    const errMessage = `Failed: ${ex}.`
    console.log(errMessage)
    core.setFailed(errMessage)
  })
  .finally(() => {
    console.log('Run complete.')
  })
