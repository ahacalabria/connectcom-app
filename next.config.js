const withSass = require("@zeit/next-sass");
module.exports = withSass();

// If you already have some config

module.exports = withSass({
  target: 'serverless',
  env: {
    JWT_SECRET: process.env.JWT_SECRET
  }
});