const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.ts')

module.exports = (envVars) => {
    const { env } = envVars
    const envConfig = require(`./webpack.${env}.ts`)(envVars)
    const commonCfg = commonConfig(envVars);
    const config = merge([commonCfg, envConfig])
    return config
}

