module.exports = function(grunt) {
    "use strict";

    grunt.initConfig({
        clean: {
            build: {
                src: 'build/'
            }
        },
        copy: {
            build: {
                expand: true,
                dest: 'build/',
                src: 'src/**/*'
            }
        },
        ts: {
            default: {
                options: {
                    fast: 'never'
                },
                src: ["build/**/*.ts"]
            }
        }
        
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ts');

    grunt.registerTask('default', [
        'clean',
        'copy',
        "ts"
    ]);

};
