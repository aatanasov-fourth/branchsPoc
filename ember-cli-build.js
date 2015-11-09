/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {

  var app = new EmberApp({
    jscsOptions: {
      configPath: '.jscsrc',
      enabled: true,
      esnext: true,
      disableTestGenerator: false
    },
    inlineContent: {
      'google-analytics': {
        file: 'vendor/ga.js'
      }
    },
    sassOptions: {
      includePaths: ['app']
    },
    fingerprint: {
      exclude: ['default.png']
    }
  });

  app.import('bower_components/moment/moment.js');
  app.import('bower_components/highcharts-release/highcharts.js');
  app.import('bower_components/babel-polyfill/browser-polyfill.js', { prepend: true });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import({
    test: 'bower_components/sinon/index.js',
    development: 'bower_components/sinon/index.js'
  });

  return app.toTree();
};