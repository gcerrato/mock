module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		clean: ["main.js"],

		//config task
		concat: {
			js: {
				src: ['app/lib/angular-1.2.21/angular.min.js', 'app/lib/angular-ui/angular-ui-router.js',
				 'app/lib/angular-1.2.21/angular-mocks.js', 'app/lib/less/less.min.js', 'app/lib/jQuery/jquery.min.js', 'app/js/**/*.js'],
				dest: 'main.js'
			}
		},

		homepage: {
			template: 'app/index.template',
			dev: {
				dest: 'index.html',
				context: {
					js: 'main.js'
				}
			}
		},

		watch: {
			js: {
				files: ['<%= concat.js.src %>'],
				tasks: ['clean', 'concat:js']
			},
			homepage: {
				files: ['<%= homepage.template %>'],
				tasks: ['homepage:dev']
			}
		}
	});

	//load task npm module
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-watch");

	//load custom task
	grunt.loadTasks("tasks");

	//setup workflow
	grunt.registerTask("default", ["clean", "concat", "homepage:dev", "watch"]);

};