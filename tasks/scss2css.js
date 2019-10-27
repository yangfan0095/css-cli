'use strict';
// https://www.npmjs.com/package/gulp-sass
var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

module.exports = function (projectName, cb) {
    const scss2css = () => {
        return gulp
            .src(`./${projectName}` + '/index.scss')
            .pipe(sass.sync().on('error', sass.logError))
            // .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(gulp.dest(`./${projectName}`))
    }
    scss2css()
}