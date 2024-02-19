const ImageminPlugin = require('imagemin-webpack-plugin').default
const imageminJpegRecompress = require('imagemin-jpeg-recompress')
const imageminPngquant = require('imagemin-pngquant')

module.exports = {
    publicPath: './',
    productionSourceMap: false,
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/styles/main.scss";`
            }
        }
    },
    transpileDependencies: ['vue-inline-svg', 'dom7', 'ssr-window', 'swiper'],
    configureWebpack: {
        plugins: [
            new ImageminPlugin({
                disable: (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'dumbopp'),
                plugins: [
                    imageminJpegRecompress({
                        loops: 4,
                        min: 80,
                        max: 85,
                        quality: 'high'
                    }),
                    imageminPngquant({
                        quality: [0.5, 0.85]
                    })
                ]
            })
        ]
    }
}
