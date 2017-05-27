module.exports = function(grunt) {

	grunt.config.init({
		clean: {
			src: "dist/"
		},
		rev: {
			options: {
				encoding: 'utf8',
				algorithm: 'md5',
				length: 2
			},
			assets: {
				files: [{
					src: [
						//						'<%= config.static_dest %>img/**/*.{jpg,jpeg,gif,png}',
						//						'<%= config.static_dest %>css/*.css',
						'dist/js/*.js',
						'dist/css/*.css',
						'dist/img/*',
					]
				}]
			}
		},
//		useminPrepare: {
//			html: 'index.html',
//			options: {
//				dest: 'dist'
//			}
//		},
		usemin: {
			html: ['dist/index.html']
		},
		uglify: {
			'dist/js/app.min.js': ['assets/js/*.js']
		},
		copy: {
			html: {
				src: 'assets/index.html',
				dest: 'dist/index.html'
			}
		},
		cssmin: {
			'dist/css/app.min.css': ['assets/css/*.css']
		},
		//压缩图片
		imagemin: {
			dist: {
				options: {
					optimizationLevel: 3 //定义 PNG 图片优化水平
				},
				files: [{
					expand: true,
					cwd: 'assets/img/',
					src: ['*.{png,jpg,jpeg}'], // 优化 img 目录下所有 png/jpg/jpeg 图片
					dest: 'dist/img/' // 优化后的图片保存位置，覆盖旧图片，并且不作提示
				}]
			}
		},
	});
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-rev');
	grunt.loadNpmTasks('grunt-usemin');
	grunt.registerTask('default', [
		'clean',
		'copy:html',
//		'useminPrepare',
		'uglify',
		'cssmin',
		'imagemin',
		'rev',		
		'usemin'
	]);
}