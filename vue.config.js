// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = {
  publicPath: '/'
};

const SitemapPlugin = require('sitemap-webpack-plugin').default
const paths = [
  {
      path: '/',
      lastmod: '2023-05-12',
      priority: 1.0,
      changefreq: 'yearly'
  },
  {
      path: '/about/',
      lastmod: '2023-05-12',
      priority: 0.9,
      changefreq: 'yearly'
  },
  {
    path: '/contact/',
    lastmod: '2023-05-12',
    priority: 0.9,
    changefreq: 'yearly'
  }
]

module.exports = {
    configureWebpack: {
        plugins: [
            new SitemapPlugin({ base: 'https://tanguydeleage.com', paths })
        ]
    },
    // Other exports here
}