import { getInput, setFailed } from '@actions/core'
import { runAction } from './runner'

runAction(getInput('source_url'), getInput('token'))
  .then(() => {
    console.log('Success.')
  })
  .catch(ex => {
    const errMessage = `Failed: ${ex}.`
    console.log(errMessage)
    setFailed(errMessage)
  })
  .finally(() => {
    console.log('Run complete.')
  })
