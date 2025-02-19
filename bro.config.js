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
    "smartini_crypto.account": "/smartini_crypto/account",
    "smartini_crypto.signin": "/smartini_crypto/signin",
    "smartini_crypto.signup": "/smartini_crypto/signup",
    "smartini_crypto.userspage": "/smartini_crypto/userspage",
    "smartini_crypto.signin.signwithtelegram": "/smartini_crypto/signin/signwithtelegram",
  },
  features: {
    "smartini_crypto": {
      // add your features here in the format [featureName]: { value: string }
    },
  },
  config: {
    "smartini_crypto.api": "https://193.124.118.57",
    //"smartini_crypto.api": "http://localhost:4000/",
    "smartini_crypto.promocode_new_year": "NEWYEAR",
    "smartini_crypto.promocode_admin": "ADMIN",
  },
};
