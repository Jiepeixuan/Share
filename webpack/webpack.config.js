var path = require('path');

module.exports = {
    entry: {
        bundle1: __dirname + '/src/main1.js',
        bundle2: __dirname + '/src/main2.js',
    },
    output: {
        path: __dirname + '/build',
        filename: '[name].js'
    }
};