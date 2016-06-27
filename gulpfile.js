var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  return gulp.src(['app/scss/*.scss', 'app/bower_components/bootstrap-sass/assets/stylesheets/bootstrap.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app/'
    },
  })
})

// Move file to .dist
// gulp.task('fonts', function() {
//   return gulp.src('app/fonts/**/*')
//   .pipe(gulp.dest('dist/fonts'))
// })

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('app/scss/*.scss', ['sass']); 
  gulp.watch('app/bower_components/bootstrap-sass/assets/stylesheets/**/*.scss', ['sass']);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('app/*.html', browserSync.reload); 
  gulp.watch('app/css/*.css', browserSync.reload); 
  gulp.watch('app/js/**/*.js', browserSync.reload); 
});


gulp.task('default', ['watch']);