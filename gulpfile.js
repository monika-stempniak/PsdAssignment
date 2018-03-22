const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    return gulp.src('./src/scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'expanded',
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./src/css'))
});

gulp.task('watch', ['sass'], function() {
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
