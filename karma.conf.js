// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-messages/angular-messages.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-sanitize/angular-sanitize.js',
            'scripts/**/*.js',
            'views/**/*.html',
            'test/**/*.Spec.js'
        ],


        // list of files to exclude
        exclude: [
            // These run blocks shouldn't be used in the testing as they are only meant to initialize
            // the app for true
            'scripts/app/**/*.js'
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            //
            // source and testing files will be transpiled by Babel
            'scripts/**/*.js': ['coverage', 'babel'],
            'test/**/*.Spec.js': ['babel'],
            // compile all of the templates into JavaScript that will be added to the $templateCache
            'views/**/*.html': ['ng-html2js']
        },

        babelPreprocessor: {
            options: {
                compact: false,
                retainLines: true,
                sourceMap: 'inline',
                presets: ['es2015']
            },
            filename: function (file) {
                return file.originalPath.replace(/\.js$/, '.es5.js');
            },
            sourceFileName: function (file) {
                return file.originalPath;
            }
        },

        ngHtml2JsPreprocessor: {
            // setting this option will create only a single module that contains templates
            // from all the files, so you can load them all with module('packbackQuestionsApp')
            moduleName: 'packbackQuestionsApp'
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],


        // optionally, configure the reporter
        coverageReporter: {
            type: 'html',
            dir: 'coverage/',
            subdir: function (browser) {
                // normalization process to keep a consistent browser name accross different
                // OS
                return browser.split(/[ /-]/)[0];
            },
            instrumenterOptions: {
                istanbul: {noCompact: true}
            }
        },


        // web server port
        port: 8080,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],//['Chrome', 'Firefox'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
