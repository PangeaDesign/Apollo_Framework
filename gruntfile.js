// Pangea Apollo Framework 2.0 [Reykjavík]
// 2018 (c) Pangea Digital, Radio Free Europe/Radio Liberty, Inc.
// All rights reserved

module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            apolloFramework: {
                files: {
                    'dist/js/apollo-framework-2.0.min.js': [
                        'src/js/configs/_configSites.js',
                        'src/js/configs/_configPaths.js',
                        'src/js/configs/_configSetupWizard.js',
                        'src/js/configs/_configParser.js',
                        'src/js/configs/_configAnalytics.js',
                        'src/js/_initHead.js',
                        'src/js/_initImages.js',
                        'src/js/_initVideos.js',
                        'src/js/_initSetupWizard.js'
                    ]
                }
            }
        },
        sass: {
            apolloFramework: {
                files: {
                    'dist/css/launch.css': 'src/sass/launch.scss',
                    'dist/css/apollo-framework-2.0.css': 'src/sass/main.scss',
                    'dist/css/apollo-framework-rfe-latin-light-2.0.css':'src/sass/main-rfe-latin-light.scss',
                    'dist/css/apollo-framework-rfe-latin-dark-2.0.css':'src/sass/main-rfe-latin-dark.scss'
                }
            }
        },
        cssmin: {
            apolloFramework: {
                files: {
                    'dist/css/launch.min.css': 'dist/css/launch.css',
                    'dist/css/apollo-framework-2.0.min.css': 'dist/css/apollo-framework-2.0.css',
                    'dist/css/apollo-framework-rfe-latin-light-2.0.min.css':'dist/css/apollo-framework-rfe-latin-light-2.0.css',
                    'dist/css/apollo-framework-rfe-latin-dark-2.0.min.css':'dist/css/apollo-framework-rfe-latin-dark-2.0.css'
                }
            }
        },
        watch: {
            uglify: {
                files: 'src/js/*.*',
                tasks: ['uglify'],
            },
            sass: {
                files: ['src/sass/*.scss', 'src/sass/launch/*.scss', 'src/sass/cultures/*.scss', 'src/sass/scaffolding/*.scss', 'src/sass/elements/*.scss', 'src/sass/themes/*.scss'],
                tasks: ['sass'],
            },
            cssmin: {
                files: ['dist/css/apollo-framework-2.0.css', 'dist/css/launch.css'],
                tasks: ['cssmin'],
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ["watch"]);
};
