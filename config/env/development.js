// Invoke 'strict' JavaScript mode
'use strict';

// Set the 'development' environment configuration object
module.exports = {
    db: 'mongodb://localhost/mean-00',//20有数据，21添加更新数据功能
    sessionSecret: 'developmentSessionSecret',
    github: {
        clientID: '4c4ff12d4ea2e9212252',
        clientSecret: 'b834f6552f2af8f7182e9baa017ed234c5022583',
        callbackURL: 'http://gsm.lujq.me/oauth/github/callback',
        authorizationURL: 'https://github.com/login/oauth/authorize',
        tokenURL: 'https://github.com/login/oauth/access_token',
    }
};
