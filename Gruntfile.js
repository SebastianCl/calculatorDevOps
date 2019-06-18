module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        jshint:{
            ejemplo: {
                src: ['./controller/lib/operation.js']
            }
        },
        watch: {
            ejemplo:{
                files: ['./controller/lib/operation.js'],
                tasks: ['jshint']
            }
        }
    });
    grunt.registerTask('default', []);
};