// Подключаем модули (названия находятся в файле package.json)
const gulp = require('gulp');
const babel = require("gulp-babel");
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
const del = require('del');
const browserSync = require('browser-sync').create();

const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');

// Порядок подключения CSS
const cssFiles = [
	'./src/scss/style.scss',
	'./src/scss/widget.scss'
]

function styles() {
	// Шаблон для поиска файлов CSS
	// Все файлы по шаблону './src/css/**/*.css'
	return gulp.src(cssFiles)

	.pipe(sourcemaps.init())

	.pipe(sass())

	// Конкотинация или соединение
	// .pipe(concat('style.min.css'))

	// Добавление префиксы
	.pipe(autoprefixer({
		cascade: false
	}))

	// Минификация CSS
	.pipe(cleanCSS({
		level: 2
	}))

	.pipe(sourcemaps.write('./'))

	// Выходная папка для стилей
	.pipe(gulp.dest('./dist/css'))

	// Синхронизирует браузер
	.pipe(browserSync.stream());
}

function scripts() {
	// Шаблон для поиска файлов js
	return gulp.src('./src/js/*.js')

	.pipe(sourcemaps.init())
    .pipe(babel())

	// Конкотинация или соединение
	.pipe(concat('app.js'))

	// Минификация JS
	// .pipe(minify({
	// 	ext:{
	// 		// Добавить в конец файлов:
	// 		min:'.min.js'
	// 	},
	// 	// Не копировать оригинальный файл
	// 	noSource: true
	// }))

	.pipe(sourcemaps.write("."))

	// Выходная папка для скриптов
	.pipe(gulp.dest('./dist/js'))

	// Синхронизирует браузер
	.pipe(browserSync.stream());
}

// Вызов функции styles
gulp.task('styles', styles);

// Вызов функции scripts
gulp.task('scripts', scripts);

// Копирование фотографий и шрифтов
gulp.task('copy', function() {
	let files = [
		'./src/img/**/*',
		'./src/fonts/*'
	]

	return gulp.src(files, {base: 'src/'})
	.pipe(gulp.dest('dist'));
})

// Вызов функции clean
gulp.task('del', function(done) {
	del.sync(['dist/css', 'dist/js'])
	done();
});

// Вызов функции clean
gulp.task('watch', function() {
	// Обновляет браузер
	browserSync.init({
		server: {
				baseDir: "./dist"
		}
	});
	// Следит за CSS файлами
	gulp.watch('./src/scss/**/*.css', styles)
	gulp.watch('./src/scss/**/*.scss', styles)
	gulp.watch('./src/scss/**/*.sass', styles)
	// Следит за JS файлами
	gulp.watch('./src/js/**/*.js', scripts)
	// При изменении HTML запускает синхронизацию
	gulp.watch("./dist/*.html").on('change', browserSync.reload);
});

// Вызов сборщика
gulp.task('build', gulp.series('del', gulp.parallel('styles', 'scripts', 'copy')));

gulp.task('dev', gulp.series('build', 'watch'));

// Вызов происходит в консоли с помощью gulp {название таска}