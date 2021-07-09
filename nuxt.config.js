const env = require('./config/env.js')
const head = require('./config/head.js')
const gtm = require('./config/gtm.js')
const modules = require('./config/modules.js')
const buildModules = require('./config/buildModules.js')

module.exports = {
  mode: 'universal',
  env,
  head,
  gtm,
  modules,
  buildModules
}
