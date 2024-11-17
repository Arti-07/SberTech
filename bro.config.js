const pkg = require("./package");

module.exports = {
  apiPath: "stubs/api",
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`,
    },
  },
  /* use https://admin.bro-js.ru/ to create config, navigations and features */
  navigations: {
    "smartini_crypto.main": "/smartini_crypto",
    "smartini_crypto.detail": "/smartini_crypto/detail",
    "smartini_crypto.mining": "/smartini_crypto/mining",
  },
  features: {
    "smartini_crypto": {
      // add your features here in the format [featureName]: { value: string }
    },
  },
  config: {
    "smartini_crypto.api": "/api",
  },
};
