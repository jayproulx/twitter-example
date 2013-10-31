module.exports = function(grunt) {
    var startupError = false;

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
          
        watch: {
          express: {
            files: ['src/main/node/*.js', 'src/main/node/**/*.js'],
            tasks: ['express:dev'],
            options: {
              nospawn: true
            }
          }
        },

        express: {
          options: {
            error: function(err, result, code) 
            {
              console.log(err, result, code);
              if(code === 3)
              {
                startupError = true;
                grunt.fail.warn('Grunt had to stop because we encountered an error starting up express.  This probably means you need to CTRL-C to quit watch.', 1);
              }
            }
          },

          dev: {
            options: {
              script: "src/main/node/server.js",
              background: true
            }
          }
        }
    });

    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('server', ['express:dev', 'watch']);

};
