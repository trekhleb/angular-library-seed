module.exports = function (config) {
  let testWebpackConfig = require('./webpack.test.config.js');

  let configuration = {

    /**
     * Base path that will be used to resolve all patterns (e.g. files, exclude).
     */
    basePath: '',

    /**
     * Frameworks to use.
     *
     * @see: https://npmjs.org/browse/keyword/karma-adapter
     */
    frameworks: ['jasmine'],

    /**
     * List of files to exclude.
     */
    exclude: [],

    client: {
      captureConsole: true
    },

    /*
     * List of files / patterns to load in the browser.
     * We are building the test environment in ./spec-bundle.js.
     */
    files: [
      { pattern: './spec-bundle.js', watched: false }
    ],

    /**
     * Pre-process matching files before serving them to the browser
     *
     * @see: https://npmjs.org/browse/keyword/karma-preprocessor.
     */
    preprocessors: {
      './spec-bundle.js': [
        'coverage',
        'webpack',
        'sourcemap'
      ]
    },

    /**
     * Webpack config at ./webpack.test.js.
     */
    webpack: testWebpackConfig,

    coverageReporter: {
      type: 'in-memory'
    },

    remapCoverageReporter: {
      'text-summary': null,
      json: './coverage/coverage.json',
      html: './coverage/html'
    },

    /**
     * Webpack please don't spam the console when running in karma!
     */
    webpackMiddleware: {
      noInfo: true,
      stats: {
        chunks: false
      }
    },

    /**
     * Test results reporter to use.
     * Possible values: 'dots', 'progress'.
     *
     * @see: https://npmjs.org/browse/keyword/karma-reporter
     */
    reporters: [
      'mocha',
      'coverage',
      'remap-coverage'
    ],

    /**
     * Web server port.
     */
    port: 9876,

    /**
     * enable / disable colors in the output (reporters and logs).
     */
    colors: true,

    /*
     * Level of logging.
     *
     * Possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
     */
    logLevel: config.LOG_WARN,

    /**
     * Enable / disable watching file and executing tests whenever any file changes.
     */
    autoWatch: false,

    /**
     * Start these browsers.
     * @see: https://npmjs.org/browse/keyword/karma-launcher
     */
    browsers: [
      'Chrome'
    ],

    customLaunchers: {
      ChromeTravisCi: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    /*
     * Continuous Integration mode.
     * if true, Karma captures browsers, runs the tests and exits
     */
    singleRun: true
  };

  config.set(configuration);
};
