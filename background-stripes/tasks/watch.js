var gulp = require('gulp');
var watch = require('gulp-watch');

module.exports = function() {
	return gulp.watch(['./sass/**/*.sass', './sass/**/*.scss'], ['sass']);
};


