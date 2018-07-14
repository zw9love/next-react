const withCSS = require('@zeit/next-css')
// console.log(process.env.NODE_ENV)
// console.log(process.env.ANALYZE)
// console.log('----------')
module.exports = withCSS({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:15]",
    },
    // exportPathMap: function(defaultPathMap) {
    //     return {
    //         '/index': { page: '/index.html' },
    //         '/AboutFirm': { page: '/AboutFirm.html'},
    //         '/BeeEye': { page: '/BeeEye.html'},
    //         '/BeeHive': { page: '/BeeHive.html'},
    //         '/BeeNeedle': { page: '/BeeNeedle.html'},
    //         '/ContactUs': { page: '/ContactUs.html'},
    //         '/PressCenter': { page: '/PressCenter.html'},
    //         '/ProductPrice': { page: '/ProductPrice.html'},
    //         '/Recruit': { page: '/Recruit.html'},
    //         '/SecurityService': { page: '/SecurityService.html'},
    //         '/Solution': { page: '/Solution.html'},
    //     }
    // },
    webpack: function (config, options) {
        // console.log(config)
        // console.log(options)
        return config;
    },
    webpackDevMiddleware: config => {
        // Perform customizations to webpack dev middleware config
        // console.log(config)
        // Important: return the modified config
        return config
    },
    // axios: {
    //     prefix: '/api/',
    //     proxy: true // Can be also an object with default options
    // },
    // proxy: {
    //     '/api/': {
    //         target: 'http://0.0.0.0',
    //         pathRewrite: {
    //             '^/api/': ''
    //         },
    //         secure: false
    //     }
    // },
})
// module.exports = withCSS()

// module.exports = {
//   webpack: (config) => {
//     // Fixes npm packages that depend on `fs` module
//     config.node = {
//       fs: 'empty'
//     }
//
//     return config
//   },
//   withCSS()
// }
