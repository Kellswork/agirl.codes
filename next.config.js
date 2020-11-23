module.exports = {
    target: 'serverless',
    webpack: function (config,  { isServer }) {
      if (isServer) {
        require('./scripts/generate-sitemap');
      }
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      })
      return config
    },
  }

