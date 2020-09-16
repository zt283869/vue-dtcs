const config = require('../config')
export default {
  publicPath : (process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath)
}
