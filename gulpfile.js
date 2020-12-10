// Подключаем модули (названия находятся в файле package.json)
const gulp = require('gulp');
const babel = require("gulp-babel");
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
const jsonMinify = require('gulp-json-minify');
const del = require('del');
const browserSync = require('browser-sync').create();

const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const { watch } = require('browser-sync');

// Порядок подключения CSS
const cssFiles = [
	'./src/scss/style.scss',
	'./src/scss/desktop.scss',
	'./src/scss/tabled.scss',
	'./src/scss/mobile.scss',
	'./src/scss/widget.scss'
]

// Вызов функции public
gulp.task('public', function () {
	// Шаблон для поиска публичных файлов
	return gulp.src('./public/*')

	// Выходная папка для публичных файлов
	.pipe(gulp.dest('./dist'))

	// Синхронизирует браузер
	.pipe(browserSync.stream());
})

// Вызов функции styles
gulp.task('styles', function () {
	// Шаблон для поиска файлов CSS
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
})

// Вызов функции scripts
gulp.task('scripts', function () {
	// Шаблон для поиска файлов js
	return gulp.src('./src/js/*.js')

	.pipe(sourcemaps.init())
	.pipe(babel())

	// Конкотинация или соединение
	.pipe(concat('app.js'))

	// Минификация JS
	.pipe(minify({
		ext:{
			// Добавить в конец файлов:
			min:'.min.js'
		},
		// Не копировать оригинальный файл
		noSource: true
	}))

	.pipe(sourcemaps.write("."))

	// Выходная папка для скриптов
	.pipe(gulp.dest('./dist/js'))

	// Синхронизирует браузер
	.pipe(browserSync.stream());
})

// Вызов функции storage
gulp.task('storage', function () {
	// Шаблон для поиска файлов json
	return gulp.src('./src/storage/*.json')

	.pipe(sourcemaps.init())

	// Минификация JSON
	.pipe(jsonMinify())

	.pipe(sourcemaps.write("."))

	// Выходная папка для скриптов
	.pipe(gulp.dest('./dist/storage'))

	// Синхронизирует браузер
	.pipe(browserSync.stream());
})

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
	del.sync('dist/*')
	done();
});

// Вызов функции clean
gulp.task('watch', function(cb) {
	// Обновляет браузер
	browserSync.init({
		server: {
			baseDir: "./dist"
		}
	});

	// Следит за CSS файлами
	gulp.watch(['./src/scss/**/*.css', './src/scss/**/*.scss', './src/scss/**/*.sass'], gulp.task('styles'))
	// Следит за JS файлами
	gulp.watch('./src/js/**/*.js', gulp.task('scripts'))
	// Следит за JSON файлами
	gulp.watch('./src/storage/**/*.json', gulp.task('storage'))
	// Следит за HTML файлами
	gulp.watch("./dist/*.html").on('change', gulp.task('public'));
});

// Вызов сборщика
gulp.task('build', gulp.series('del', gulp.parallel('public', 'styles', 'scripts', 'storage', 'copy')));

// Вызов developer-mode
gulp.task('dev', gulp.series('build', 'watch'));

// Вызов происходит в консоли с помощью gulp {название таска}