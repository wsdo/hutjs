const path = require('path')
const PATH_ROOT = path.resolve(__dirname, '..')
// const PATH_SRC = `${PATH_ROOT}/src`
// const PATH_DIST = `${PATH_ROOT}/dist`
// const PATH_PKG = `${PATH_ROOT}/package.json`

const PATH_SRC = path.join(PATH_ROOT, 'src')
const PATH_DIST = path.join(PATH_ROOT, 'dist')
const PATH_PUBLIC = path.join(PATH_ROOT, 'public')
const PATH_EXAMPLE = path.join(PATH_ROOT, 'example')
const PATH_PKG = path.join(PATH_ROOT, 'package.json')

module.exports = {
  PATH_ROOT,
  PATH_SRC,
  PATH_DIST,
  PATH_PUBLIC,
  PATH_PKG,
  PATH_EXAMPLE,
  // PATH_NODE_MODULES: `${PATH_ROOT}/node_modules`
  PATH_NODE_MODULES: path.join(PATH_ROOT, 'node_modules')
}
