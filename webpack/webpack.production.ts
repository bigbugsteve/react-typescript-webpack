// const webpack = require('webpack')
import path from 'path'
module.exports = (envVars) => {
    const env = require('dotenv').config({path: path.resolve(__dirname, `../environments/.env.${envVars.env}`)})
    console.log('\x1b[31m', ' ---------------------------------------------------------')                
    console.log('\x1b[31m', "[ENVIRONMENT]  -", "\x1b[30m", envVars.env, "\x1b[0m")
    console.log('\x1b[31m', "[BACKEND]      -", "\x1b[30m", `${env.parsed.API_URL}`, "\x1b[0m")
    console.log('\x1b[31m', ' ---------------------------------------------------------')
                
    return {
        mode: 'production',
        devtool: 'source-map',
        plugins: [
            
        ]
    }
}