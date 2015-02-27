var gulp = require('gulp'),
    uglify = require('gulp-uglify');
    concat = require('gulp-concat');
    sass = require('gulp-ruby-sass');
    compass = require('gulp-compass');
    jade = require('gulp-jade');
    plumber = require('gulp-plumber');
    imagemin = require('gulp-imagemin');
    livereload = require('gulp-livereload');
    spritesmith = require('gulp.spritesmith');
    csscomb = require('gulp-csscomb');
    minifyCSS = require('gulp-minify-css');
    connect = require('gulp-connect');
 
// Gulp Uglify
gulp.task('uglify', function(){
	gulp.src('dev/js/**/*.js')
	.pipe(plumber())	// контроль ошибок
    .pipe(uglify())
    .pipe(gulp.dest('production/scripts/'))
});

// Gulp Jade
gulp.task('jade', function() {
  gulp.src('dev/template/*.jade')
  	.pipe(plumber())	// контроль ошибок
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest('production/'))
});

gulp.task('sprite', function() {
	var spriteData =
		gulp.src('dev/images/sprite/*.png')
			.pipe(spritesmith({
				imgName: 'sprite.png',
				cssName: '_sprite.scss',
				cssFormat: 'scss',
				algorithm: 'binary-tree',
				padding: 5,
				cssVarMap: function(sprite) {
					sprite.name = 's-' + sprite.name;
                    sprite.image = sprite.image;
				}
			}));
		spriteData.img
    	.pipe(imagemin())
    .pipe(gulp.dest('production/css/'))
    //.pipe(gulp.dest('dev/images/'))
	spriteData.css.pipe(gulp.dest('dev/sass/helpers'));
});

gulp.task('images', function() {
	gulp.src(['dev/images/**/*', '!dev/images/sprite'])
	.pipe(imagemin({
		progressive: true
	}))
    .pipe(gulp.dest('production/images/'))
    //.pipe(gulp.dest('dev/images/'))
});

// Gulp compass
gulp.task('sass', function() {
    return gulp.src('dev/sass/*.scss')
    .pipe(plumber())	// контроль ошибок
    .pipe(compass({
        config_file: 'config.rb',
        project: __dirname+'/dev',
      	css: 'css',
      	sass: 'sass'
    }))
    .pipe(csscomb())
    .pipe(gulp.dest('dev/css'));
});

gulp.task('css', function() {
	return gulp.src('dev/css/*.css')
	.pipe(plumber())	// контроль ошибок
	.pipe(concat('style.css'))
	.pipe(minifyCSS())
	.pipe(gulp.dest('production/css'));
});

gulp.task('connect', function() {
  connect.server({
    root: __dirname,
    livereload: true
  });
});

// Watch Task
gulp.task('watch', function() {
	livereload.listen();
    gulp.watch('dev/template/**/*.jade', ['jade']).on('change', livereload.changed);
    gulp.watch('dev/images/sprite/*.png', ['sprite']).on('change', livereload.changed);
    gulp.watch('dev/images/*', ['images']).on('change', livereload.changed);
    gulp.watch('dev/images/temp/*.png', ['images']).on('change', livereload.changed);
    gulp.watch('dev/sass/**/*.scss', ['sass']).on('change', livereload.changed);
    gulp.watch('dev/css/*.css', ['css']).on('change', livereload.changed);
    gulp.watch('dev/js/**/*.js', ['uglify']).on('change', livereload.changed);
});

// Bump project
gulp.task('bump', ['uglify', 'css', 'jade', 'sprite', 'images', 'sass']);

// Default function
gulp.task('default', ['bump', 'watch', 'connect']);