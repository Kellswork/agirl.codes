module.exports = {
  target: "serverless",
  webpack: function (config, { isServer }) {
    if (isServer) {
    }
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });

    return config;
  },
};