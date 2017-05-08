import webpackTestConfig from './webpack-test.config';
import { ConfigOptions } from 'karma';

export default (config) => {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'src/test.ts'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/test.ts': ['webpack', 'sourcemap']
    },

    webpack: webpackTestConfig,

    // Webpack please don't spam the console when running in karma!
    webpackMiddleware: {
      noInfo: true,
      // and use stats to turn off verbose output
      stats: {
        chunks: false
      }
    },

    coverageIstanbulReporter: {
      reports: ['text-summary', 'html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'coverage-istanbul'],

    // level of logging
    // possible values:
    // config.LOG_DISABLE
    // config.LOG_ERROR
    // config.LOG_WARN
    // config.LOG_INFO
    // config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    browserConsoleLogOptions: {
      terminal: true,
      level: 'log'
    },

    singleRun: true,
    colors: true
  } as ConfigOptions);
};
