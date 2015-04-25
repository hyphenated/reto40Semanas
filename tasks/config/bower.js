/**
 * Integrate bower dependencies to assets folder
 *
 * ---------------------------------------------------------------
 *
 * This grunt task is configured to move bower dependencies to 
 * assets folder
 *
 * For usage docs see:
 *      https://github.com/curist/grunt-bower
 */
 module.exports = function(grunt) {

    grunt.config.set('bower', {
        dev: {
            dest: 'assets',
            js_dest: 'assets/js/dependencies',
            css_dest: 'assets/styles/vendors',
            fonts_dest: 'assets/styles/fonts',
            scss_dest: 'assets/styles/vendors',
            options: {
                ignorePackages: ['foundation', 'grunt'],
                stripAffix: true,
                keepExpandedHierarchy: false,
                packageSpecific: {
                    'modernizr': {
                        files: [
                            'modernizr.js'
                        ]
                    }
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-bower');
};
