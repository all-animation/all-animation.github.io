// Modules :)
// ===========================================
var gulp     = require('gulp'),
    connect  = require('gulp-connect');

// Static server
// ===========================================
gulp.task('serve', () => {
	connect.server();
});
