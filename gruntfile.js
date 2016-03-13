// Generated on 2014-06-15 using generator-angular 0.8.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/**/*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Automatically load required Grunt tasks
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin',
        ngconstant: 'grunt-ng-constant',
        protractor: 'grunt-protractor-runner'
    });

    // Configurable paths for the application
    var appConfig = {
        app: require('./bower.json').appPath || '.',
        assets: 'assets',
        testAssets: 'assetsTest',
        e2eAssets: 'assetsE2E'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        yeoman: appConfig,

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['wiredep']
            },
            js: {
                files: ['<%= yeoman.app %>/index.html', '<%= yeoman.app %>/scripts/**/*.js'],
                tasks: ['newer:babel:app', 'ngdocs:api']
            },
            views: {
                files: ['<%= yeoman.app %>/views/**/*.html'],
                tasks: ['newer:copy:views']
            },
            img: {
                files: ['<%= yeoman.assets %>/img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
                tasks: ['newer:copy:img']
            },
            sass: {
                files: ['<%= yeoman.app %>/scss/**/*.{scss,sass}'],
                tasks: ['sass:app', 'postcss:app']
            },
            gruntfile: {
                files: ['gruntfile.js']
            }
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: {
                src: [
                    'gruntfile.js',
                    '<%= yeoman.app %>/scripts/**/*.js'
                ]
            },
            test: {
                options: {
                    jshintrc: '.jshintrc'
                },
                src: ['test/**/*.Spec.js']
            }
        },

        // Empties folders to start fresh
        clean: {
            app: '<%= yeoman.assets %>',
            test: '<%= yeoman.testAssets %>',
            e2e: '<%= yeoman.e2eAssets %>',
            docs: 'docs'
        },

        // Add vendor prefixed styles
        postcss: {
            options: {
                preprocessors: [
                    require('autoprefixer')({browsers: ['last 1 version']})
                ]
            },
            app: {
                options: {
                    map: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.assets %>/css/',
                    src: '**/*.css',
                    dest: '<%= yeoman.assets %>/css/'
                }]
            },
            e2e: {
                options: {
                    map: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.e2eAssets %>/css/',
                    src: '**/*.css',
                    dest: '<%= yeoman.e2eAssets %>/css/'
                }]
            }
        },

        // Automatically inject Bower components into the app
        wiredep: {
            app: {
                src: ['<%= yeoman.app %>/index.html'],
                ignorePath: /\.\.\//
            },
            test: {
                devDependencies: true,
                src: '<%= karma.unit.configFile %>',
                ignorePath: /\.\.\//,
                fileTypes: {
                    js: {
                        block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
                        detect: {
                            js: /'(.*\.js)'/gi
                        },
                        replace: {
                            js: '\'{{filePath}}\','
                        }
                    }
                }
            },
            sass: {
                src: ['<%= yeoman.app %>/scss/**/*.{scss}'],
                ignorePath: /(\.\.\/){1,2}bower_components\//,
                fileTypes: {
                    css: {
                        detect: {
                            css: /'(.*\.css)'/gi
                        },
                        replace: {
                            css: '\'{{filePath}}\','
                        }
                    }
                }
            }
        },

        // Generate an environment file for dev and prod systems
        ngconstant: {
            // Options for all targets
            options: {
                space: ' ',
                wrap: '"use strict";\n\n{%= __ngModule %}',
                name: 'api-env',
                dest: '<%= yeoman.app %>/scripts/env-config.js'
            },
            // Environment targets
            test: {
                options: {
                    dest: '<%= yeoman.e2eAssets %>/scripts/env-config.js'
                },
                constants: {
                    APIEnvironment: {
                        environment: 'test',
                        subDomain: 'test.',
                        domain: 'packback.co',
                        clientId: 'JOdV1YGrGYyrRsMWkB',
                        clientSecret: 'kuLArV4k57XqCzZnKFZUt1ws6WIwmSatghSB'
                    }
                }
            },
            app: {
                constants: {
                    APIEnvironment: {
                        environment: 'development',
                        subDomain: 'dev.',
                        domain: 'packback.co',
                        clientId: 'YsO2Br66UgfUjthEPM',
                        clientSecret: '3hq3L9JBG5F7C3AFhzCjgE2kG88sbBx8cutr'
                    }
                }
            },
            dist: {
                constants: {
                    APIEnvironment: {
                        environment: 'production',
                        subDomain: '',
                        domain: 'packback.co',
                        clientId: 'RJlvi6bnIuuvZfSOwE',
                        clientSecret: 'K34d6fyYkJHqxkPg0O8kzAzGRH2vBw2ZjVhf'
                    }
                }
            }
        },

        babel: {
            options: {
                comments: false,
                sourceMaps: false,
                presets: ['es2015']
            },
            app: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/scripts',
                    src: ['**/*.js'],
                    dest: '<%= yeoman.assets %>/scripts',
                    ext: ".js"
                }]
            },
            dist: {
                options: {
                    compact: false
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.assets %>/js',
                    src: ['scripts*.js'],
                    dest: '<%= yeoman.assets %>/js',
                    ext: ".js"
                }]
            }
        },

        sass: {
            options: {
                lineNumbers: false,
                sourceMap: false,
                outputStyle: 'nested',
                sourceComments: true,
                includePaths: [
                    'bower_components/packback-styling/assets/scss',
                    'bower_components/packback-styling/assets/scss/vendor',
                    'bower_components/packback-styling/assets/scss/vendor/foundation',
                    'bower_components/packback-styling/assets/scss/vendor/foundation/components',
                    'bower_components/packback-directives/lib/scss',
                    'scss',
                    'scss/directives',
                    'scss/modals',
                    'scss/pages'
                ]
            },
            app: {
                files: [{
                    'expand': true,
                    'cwd': '<%= yeoman.app %>',
                    'src': ['scss/**/*.scss'],
                    'dest': '<%= yeoman.assets %>/css',
                    'ext': '.css',
                    'flatten': true
                }]
            },
            e2e: {
                files: [{
                    'expand': true,
                    'cwd': '<%= yeoman.app %>',
                    'src': ['scss/**/*.scss'],
                    'dest': '<%= yeoman.e2eAssets %>/css',
                    'ext': '.css',
                    'flatten': true
                }]
            }
        },

        // Renames files for browser caching purposes
        filerev: {
            dist: {
                files: [
                    {
                        src: [
                            '<%= yeoman.assets %>/js/**/*.js',
                            '<%= yeoman.assets %>/css/**/*.css'
                        ]
                    }
                ]
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: '<%= yeoman.assets %>',
                flow: {
                    html: {
                        steps: {
                            js: ['concat'],
                            css: []
                        },
                        post: {}
                    }
                }
            }
        },

        // Performs rewrites based on filerev and the useminPrepare configuration
        usemin: {
            html: ['<%= yeoman.assets %>/**/*.html'],
            css: ['<%= yeoman.assets %>/css/**/*.css'],
            options: {
                assetsDirs: [
                    '<%= yeoman.assets %>',
                    '<%= yeoman.assets %>/css'
                ]
            }
        },

        // The following *-min tasks will produce minified files in the assets folder
        // By default, your `index.html`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.
        cssmin: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= yeoman.assets%>',
                        src: ['css/**/*.css'],
                        dest: '<%= yeoman.assets%>'
                    }
                ]
            }
        },
        uglify: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= yeoman.assets%>',
                        src: ['js/**/*.js'],
                        dest: '<%= yeoman.assets%>'
                    }
                ]
            }
        },
        // concat: {
        //   dist: {}
        // },

        imagemin: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= yeoman.app %>/img',
                        src: '**/*.{png,jpg,jpeg,gif}',
                        dest: '<%= yeoman.assets %>/img'
                    },
                    {
                        expand: true,
                        cwd: '<%= yeoman.app %>/bower_components/packback-styling/assets/img',
                        src: '**/*.{png,jpg,jpeg,gif}',
                        dest: '<%= yeoman.assets %>/img'
                    },
                    {
                        expand: true,
                        cwd: '<%= yeoman.app %>/bower_components/packback-directives/lib/img',
                        src: '**/*.{png,jpg,jpeg,gif}',
                        dest: '<%= yeoman.assets %>/img'
                    }
                ]
            }
        },

        svgmin: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= yeoman.app %>/img',
                        src: '**/*.svg',
                        dest: '<%= yeoman.assets %>/img'
                    },
                    {
                        expand: true,
                        cwd: '<%= yeoman.app %>/bower_components/packback-styling/assets/img',
                        src: '**/*.svg',
                        dest: '<%= yeoman.assets %>/img'
                    },
                    {
                        expand: true,
                        cwd: '<%= yeoman.app %>/bower_components/packback-directives/lib/img',
                        src: '**/*.svg',
                        dest: '<%= yeoman.assets %>/img'
                    }
                ]
            }
        },

        // ng-annotate tries to make the code safe for minification automatically
        // by using the Angular long form for dependency injection.
        ngAnnotate: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= yeoman.assets %>/concat/scripts',
                        src: '*.js',
                        dest: '<%= yeoman.assets %>/concat/scripts'
                    }
                ]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeComments: true, // Only if you don't use comment directives!
                    preventAttributesEscaping: true
                },
                files: [
                    {
                        expand: true,
                        cwd: '<%= yeoman.app %>',
                        src: ['views/**/*.html'],
                        dest: '<%= yeoman.assets %>'
                    }
                ]
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= yeoman.app %>',
                        dest: '<%= yeoman.assets %>',
                        src: [
                            '*.{ico,png,txt}',
                            '*.html',
                            'img/**/*.{webp}',
                            'angular-seo-server.js'
                        ]
                    },
                    {
                        expand: true,
                        cwd: '<%= yeoman.app %>',
                        dest: '<%= yeoman.assets %>/fonts',
                        src: ['bower_components/packback-styling/assets/fonts/*.*'],
                        flatten: true
                    }
                ]
            },
            views: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= yeoman.app %>',
                        dest: '<%= yeoman.assets %>',
                        src: [
                            'views/**/*.html'
                        ]
                    }
                ]
            },
            img: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= yeoman.app %>',
                        dest: '<%= yeoman.assets %>',
                        src: [
                            'img/**/*.{png,jpg,jpeg,gif,svg,webp}'
                        ]
                    }
                ]
            },
            local: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= yeoman.app %>',
                        dest: '<%= yeoman.assets %>',
                        src: [
                            '*.{ico,png,txt}',
                            '*.html',
                            'angular-seo-server.js',
                            'img/**/*.{png,jpg,jpeg,gif,svg,webp}',
                            'views/**/*.html',
                            'bower_components/**'
                        ]
                    },
                    {
                        expand: true,
                        cwd: '<%= yeoman.app %>',
                        dest: '<%= yeoman.assets %>/fonts',
                        src: ['bower_components/packback-styling/assets/fonts/*.*'],
                        flatten: true
                    },
                    {
                        expand: true,
                        cwd: '<%= yeoman.app %>',
                        dest: '<%= yeoman.assets %>/img',
                        src: ['bower_components/packback-styling/assets/img/**/*.{png,jpg,jpeg,gif,svg,webp}'],
                        flatten: true
                    },
                    {
                        expand: true,
                        cwd: '<%= yeoman.app %>/bower_components/packback-directives/lib',
                        dest: '<%= yeoman.assets %>',
                        src: ['img/**/*.{png,jpg,jpeg,gif,svg,webp}'],
                        flatten: false
                    }
                ]
            },
            e2e: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= yeoman.app %>',
                        dest: '<%= yeoman.e2eAssets %>',
                        src: [
                            '*.{ico,png,txt}',
                            '*.html',
                            'angular-seo-server.js',
                            'img/**/*.{png,jpg,jpeg,gif,svg,webp}',
                            'scripts/**/*.js',
                            'views/**/*.html',
                            'bower_components/**',
                            // Don't copy the env-config file from scripts since it won't be the correct one
                            // and the correct one was put in place by ngconstant
                            '!scripts/env-config.js'
                        ]
                    },
                    {
                        expand: true,
                        cwd: '<%= yeoman.app %>',
                        dest: '<%= yeoman.e2eAssets %>/fonts',
                        src: ['bower_components/packback-styling/assets/fonts/*.*'],
                        flatten: true
                    },
                    {
                        expand: true,
                        cwd: '<%= yeoman.app %>',
                        dest: '<%= yeoman.e2eAssets %>/img',
                        src: ['bower_components/packback-styling/assets/img/**/*.{png,jpg,jpeg,gif,svg,webp}'],
                        flatten: true
                    },
                    {
                        expand: true,
                        cwd: '<%= yeoman.app %>/bower_components/packback-directives/lib',
                        dest: '<%= yeoman.e2eAssets %>',
                        src: ['img/**/*.{png,jpg,jpeg,gif,svg,webp}'],
                        flatten: false
                    }
                ]
            }
        },

        // Run some tasks in parallel to speed up the build process
        concurrent: {
            app: [
                'sass:app'
            ],
            dist: [
                'sass:app',
                'imagemin',
                'svgmin'
            ]
        },

        // Test settings
        karma: {
            ci: {
                configFile: './karma.conf.js',
                singleRun: false
            },
            unit: {
                configFile: './karma.conf.js',
                singleRun: true
            }
        },

        protractor: {
            options: {
                configFile: 'protractor.conf.js', // Default config file
                noColor: false, // If true, protractor will not use colors in its output.
                keepAlive: true // If false, the grunt process stops when the test fails.
            },
            app: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
                options: {
                    args: {} // Target-specific arguments
                }
            },
            dev: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
                options: {
                    args: {
                        params: {env: 'dev'}
                    } // Target-specific arguments
                }
            },
            prod: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
                options: {
                    args: {
                        params: {env: 'prod'}
                    } // Target-specific arguments
                }
            }
        },

        // Documentation settings
        ngdocs: {
            options: {
                dest: 'docs',
                html5Mode: false,
                startPage: '/',
                title: 'Money Tracker Frontend',
                titleLink: '#/',
                inlinePartials: false,
                bestMatch: true,
                editLink: false,
                sourceLink: true
            },
            api: {
                src: [
                    '<%= yeoman.app %>/scripts/**/*.js',
                    '!<%= yeoman.app %>/test/**/*.Spec.js',
                    '!<%= yeoman.app %>/scripts/env-config.js'
                ],
                title: 'Money Tracker Documentation',
                api: true
            }
        }
    });

    grunt.registerTask('test-ci', [
        'clean:test',
        'karma:ci'
    ]);

    grunt.registerTask('test', [
        'clean:test',
        'karma:unit'
    ]);

    grunt.registerTask('e2e', 'Run E2E testing on our stuff', function (env) {
        grunt.task.run(['clean:e2e', 'sass:e2e', 'postcss:e2e', 'copy:e2e']);
        if (arguments.length === 0) {
            grunt.task.run('protractor:app');
        }
        else {
            grunt.task.run('protractor:' + env);
        }
    });

    grunt.registerTask('e2e-remote', 'Deploy the testing environment and run E2E testing on it', function () {
        grunt.task.run([
            'clean:e2e',
            'sass:e2e',
            'postcss:e2e',
            'copy:e2e',
            'shell:deploy-e2e',
            'protractor:dev'
        ]);
    });

    grunt.registerTask('prod', [
        'clean:app',
        'wiredep:app',
        'wiredep:sass',
        'useminPrepare',
        'concurrent:dist',
        'postcss:app',
        'ngAnnotate',
        'concat',
        'copy:dist',
        'babel:dist',
        'htmlmin',
        'cssmin',
        'uglify',
        'filerev',
        'usemin'
    ]);

    grunt.registerTask('dev', [
        'clean:app',
        'wiredep:app',
        'wiredep:sass',
        'useminPrepare',
        'concurrent:dist',
        'postcss:app',
        'ngAnnotate',
        'concat',
        'copy:dist',
        'babel:dist',
        'htmlmin',
        'usemin'
    ]);

    grunt.registerTask('default', [
        'local'
    ]);

    grunt.registerTask('local', [
        'clean:app',
        'clean:docs',
        'sass:app',
        'postcss:app',
        'ngdocs:api',
        'copy:local',
        'babel:app'
    ]);

    grunt.registerTask('local-watch', [
        'sass:app',
        'postcss:app',
        'ngdocs:api',
        'copy:local',
        'babel:app',
        'watch'
    ]);
};
