const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const image = require('gulp-image');

gulp.task('sass', () => {
    return gulp.src('./src/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'expanded',
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./src/css'))
});

gulp.task('watch', ['sass'], () => {
    gulp.watch('./src/scss/*.scss', ['sass']);
});

gulp.task('default', () =>
    gulp.src('./src/css/main.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);

gulp.task('image', () => {
    gulp.src('./src/images/*')
      .pipe(image())
      .pipe(gulp.dest('./dest'));
  });
   
gulp.task('default', ['image']);
