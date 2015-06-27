var gulp = require('gulp');
var rimraf = require('rimraf');

gulp.task('clean', function(next) {
  rimraf('./dist', next);
});

gulp.task('move', function() {
  return gulp.src('./src/**/*').pipe(gulp.dest('./dist'));
});

gulp.task('build', ['clean'], function() {
  gulp.start('move');
});

gulp.task('watch', function() {
  gulp.watch('./src/**/*', ['move']);
});