
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
import path from 'path';

module.exports = (envVars) => {
    return {
        mode: 'development',
        devServer: {
            static: path.join(__dirname, '..', 'public'),
            port: 3001,
            hot: true,
            open: true,
            onListening: function () {
                const env = require('dotenv').config({path: path.resolve(__dirname, `../environments/.env.${envVars.env}`)})
                console.log('')
                console.log('\x1b[31m', ' ---------------------------------------------------------')                
                console.log('\x1b[31m', "[ENVIRONMENT]  -", "\x1b[30m", envVars.env, "\x1b[0m")
                console.log('\x1b[31m', "[BACKEND]      -", "\x1b[30m", `${env.parsed.API_URL}`, "\x1b[0m")
                console.log('\x1b[31m', ' ---------------------------------------------------------')
                console.log('')
                // console.log('file: webpack.development.ts ~ line 16 ~ env', env);
            }
        },
        devtool: 'cheap-module-source-map', 
        plugins: [
        ]
    }
        // new webpack.DefinePlugin({
        //     'process.env.name': JSON.stringify('Hello'),
        // }),
        // new ReactRefreshWebpackPlugin()
}
