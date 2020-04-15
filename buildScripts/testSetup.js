// This file isn't transpiled, so must use commonJS and ES6

// Register Babel to transpile before our tests run.
require('babel-register')();

// Disable webpack features that mocha doesn't understand.
require.extensions['css'] = function() {};
