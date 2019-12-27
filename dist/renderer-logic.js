// eslint-disable-next-line no-unused-vars
async function rendererLogic(selector, url) {
  const handle = document.querySelector(selector)
  const ModAlloc = await import(url)
  const Alloc = typeof ModAlloc === 'function' ? ModAlloc : ModAlloc.default

  // eslint-disable-next-line no-undef
  const elem = Alloc(React, React.version)

  return new Promise(resolve => {
    // eslint-disable-next-line no-undef
    ReactDOM.render(React.createElement(elem), handle, () => resolve())
  })
}
