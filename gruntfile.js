// Pangea Apollo Framework 2.0 [Reykjavík]
// 2018 (c) Pangea Digital, Radio Free Europe/Radio Liberty, Inc.
// All rights reserved
// Main Grunt File

module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            apolloFramework: {
                files: {
                    'dist/css/apollo-framework-2.0-launch.min.css': 'src/sass/launch.scss',
                    'dist/css/apollo-framework-2.0-ct-cyrillic-light.min.css': 'src/sass/main-ct-cyrillic-light.scss',
                    'dist/css/apollo-framework-2.0-ct-cyrillic-dark.min.css': 'src/sass/main-ct-cyrillic-dark.scss',
                    'dist/css/apollo-framework-2.0-rfe-arabic-light.min.css': 'src/sass/main-rfe-arabic-light.scss',
                    'dist/css/apollo-framework-2.0-rfe-arabic-dark.min.css': 'src/sass/main-rfe-arabic-dark.scss',
                    'dist/css/apollo-framework-2.0-rfe-armenian-light.min.css': 'src/sass/main-rfe-armenian-light.scss',
                    'dist/css/apollo-framework-2.0-rfe-armenian-dark.min.css': 'src/sass/main-rfe-armenian-dark.scss',
                    'dist/css/apollo-framework-2.0-rfe-georgian-light.min.css': 'src/sass/main-rfe-georgian-light.scss',
                    'dist/css/apollo-framework-2.0-rfe-georgian-dark.min.css': 'src/sass/main-rfe-georgian-dark.scss',
                    'dist/css/apollo-framework-2.0-rfe-latin-cyrillic-light.min.css': 'src/sass/main-rfe-latin-cyrillic-light.scss',
                    'dist/css/apollo-framework-2.0-rfe-latin-cyrillic-dark.min.css': 'src/sass/main-rfe-latin-cyrillic-dark.scss'

                }
            }
        },
        uglify: {
            apolloFramework: {
                options: {
                    mangle: false,
                    compress: {
                        drop_console: false
                    }
                },
                files: {
                    'dist/js/apollo-framework-2.0.min.js': [
                        'src/js/configs/_configSVG.js',
                        'src/js/configs/_configSites.js',
                        'src/js/configs/_configPaths.js',
                        'src/js/configs/_configSetupWizard.js',
                        'src/js/configs/_configParser.js',
                        'src/js/configs/_configAnalytics.js',
                        'src/js/_initHead.js',
                        'src/js/_initSetupWizard.js',
                        'src/js/_renderPage.js',
                        'src/js/_initPage.js',
                        'src/js/_initImages.js',
                        'src/js/vendors/photoswipe/photoswipe-ui-default.min.js',
                        'src/js/vendors/photoswipe/photoswipe.min.js',
                        'src/js/vendors/plyr/plyr.js',
                        'src/js/_initVideos.js'
                    ]
                }
            }
        },
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({ browsers: 'last 2 versions' }),
                    require('cssnano')()
                ]
            },
            dist: {
                src: 'dist/css/*.css'
            }
        },
        watch: {
            sass: {
                files: ['src/sass/**/*.scss'],
                tasks: ['sass', 'postcss']
            },
            uglify: {
                files: ['src/js/*.js', 'src/js/configs/*.js', 'src/js/vendors/photoswipe/*.js', 'src/js/vendors/plyr/*.js'],
                tasks: ['uglify']
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass', 'uglify', 'postcss', 'watch']);
};