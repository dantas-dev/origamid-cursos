const gulp = require('gulp');
const sass = require('gulp-sass');

function compilaSass() {
  return gulp.src('css/scss/**/*.scss')
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(gulp.dest('css/'))
}

gulp.task('sass', compilaSass);