module.exports = {
  target: "serverless",
  webpack: function (config, { isServer }) {
    if (isServer) {
    }
    require("./scripts/generate-sitemap");
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
      images: '/posts-images/social-media-header.jpg',
    });

    return config;
  },
};
