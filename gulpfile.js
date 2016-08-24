// 依赖
const gulp = require('gulp');
const browserSync = require('browser-sync');
const babel = require('gulp-babel');

// 任务
gulp.task('default', ['babel']);
gulp.task('server', ['brow', 'watch']);

// 静态服务
gulp.task('brow', () => {
    return browserSync({
        files: ['dist/**/*.js', 'test/**/*.html'],
        server: {
            baseDir: "./"
        }
    });
});

// babel编译
gulp.task('babel', () => {
	return gulp.src(['src/**/*.js'])
		.pipe(babel({presets: ['es2015', 'stage-0']}).on('error', (e) => {console.log(e.message)}))
		.pipe(gulp.dest('dist'));
});

// 自动编译
gulp.task('watch', () => {
	gulp.watch(['src/**/*.js'], ['babel']);
});