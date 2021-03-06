/**
 * Compiles SASS files into CSS.
 *
 * ---------------------------------------------------------------
 *
 * Only the `assets/styles/main.scss` is compiled.
 * This allows you to control the ordering yourself, i.e. import your
 * dependencies, mixins, variables, resets, etc. before other stylesheets)
 *
 * For usage docs see:
 *      https://github.com/sindresorhus/grunt-sass
 */
module.exports = function(grunt) {

    grunt.config.set('sass', {
        dev: {
            files: [{
                expand: true,
                cwd: 'assets/styles/',
                src: ['main.scss'],
                dest: '.tmp/public/styles/',
                ext: '.css'
            }],
        },
        options: {
            includePaths: [
                'bower_components/animate-sass/',
                'bower_components/foundation/scss/',
            ],
            outputStyle: 'compressed'
        }
    });

    grunt.loadNpmTasks('grunt-sass');
};
