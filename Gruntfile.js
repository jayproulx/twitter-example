module.exports = function (grunt) {
	var startupError = false;

	var config = {
		www: {
			files: 'src/main/www/js/**/*.js',
			entry: 'src/main/www/dist/app.js',
            options: {
                aliasMappings: {
                    cwd: 'src/main/www/js',
                    src: ['**/*.js'],
                    dest: 'js'
                }
            }
		},

		vendor: {
			files: [
                "src/main/www/components/jquery/jquery.min.js",
                "src/main/www/components/bootstrap/dist/js/bootstrap.min.js",
                "src/main/www/components/angular/angular.min.js",
                "src/main/www/components/angular-resource/angular-resource.min.js",
                "src/main/www/components/angular-ui-router/release/angular-ui-router.js"
            ],
			entry: "src/main/www/dist/vendor.js"
		},

		node: {
			files: 'src/main/node/**/*.js',
			entry: 'src/main/node/server.js'
		}
	};

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			express: {
				files: config.node.files,
				tasks: ['express:dev'],
				options: {
					nospawn: true
				}
			},

			browserify: {
				files: config.www.files,
				tasks: ['browserify:dev']
			}
		},

		browserify: {
			vendor: {
				src: config.vendor.files,
				dest: config.vendor.entry,
				options: {
					alias: [
                        "src/main/www/components/jquery/jquery.min.js:jquery",
                        "src/main/www/components/angular/angular.min.js:angular"
                    ],
					shim: {
						jquery: {
							path: 'src/main/www/components/jquery/jquery.min.js',
							exports: '$'
						},
						angular: {
							path: 'src/main/www/components/angular/angular.min.js',
							exports: 'angular'
						}
					},
					transform: ['uglifyify']
				}
			},

			dev: {
				src: config.www.files,
				dest: config.www.entry,
				options: {
					aliasMappings: config.www.options.aliasMappings
				}
			},

			dist: {
				src: config.www.files,
				dest: config.www.entry,
				options: {
					transform: ['uglifyify'],
					aliasMappings: config.www.options.aliasMappings
				}
			}
		},

		express: {
			options: {
				error: function (err, result, code) {
					console.log(err, result, code);
					if (code === 3) {
						startupError = true;
						grunt.fail.warn('Grunt had to stop because we encountered an error starting up express.  This probably means you need to CTRL-C to quit watch.', 1);
					}
				}
			},

			dev: {
				options: {
					script: config.node.entry,
					background: true
				}
			},

			dist: {
				options: {
					script: config.node.entry,
					background: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-express-server');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browserify');

	grunt.registerTask('server', ['express:dev', 'browserify:vendor', 'browserify:dev', 'watch']);
	grunt.registerTask('server:dev', 'server');
	grunt.registerTask('server:dist', ['express:dist', 'browserify:vendor', 'browserify:dist']);
	grunt.registerTask('travisci', 'browserify');
};