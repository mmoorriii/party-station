"use strict"
//ПРИСВАИВАЕМ ИМЕНА СКАЧЕННЫМ ПЛАГИНАМ
const { src, dest } = require("gulp");
const gulp = require("gulp");
const fileInclude = require('gulp-file-include');
const webpHtmlNosvg = require('gulp-webp-html-nosvg');
const versionNumber = require('gulp-version-number');
const removeHtmlComments = require('gulp-remove-html-comments');
const autoprefixer = require("gulp-autoprefixer");
const cssbeautify = require("gulp-cssbeautify");
const gulpGroupCssMedia = require("gulp-group-css-media-queries");
const webpCss = require('gulp-webpcss');
const removeComments = require('gulp-strip-css-comments');
const rename = require("gulp-rename");
const rigger = require("gulp-rigger");
const sass = require("gulp-sass")(require('sass'));
const cssnano = require("gulp-cssnano");
const uglify = require("gulp-uglify");
const plumber = require("gulp-plumber");
const imagemin = require("gulp-imagemin");
const del = require("del");
const notify = require("gulp-notify");
const replace = require("gulp-replace");
const imagewebp = require("gulp-webp");
const newer = require('gulp-newer');
const zipPlugin = require("gulp-zip");
const ifPlugin = require("gulp-if");
const browserSync = require("browser-sync").create();

/* Modes */
const isBuild = process.argv.includes('--build')
//const isDev = !process.argv.includes('--build')

/* Paths */
const srcPath = "src/"
const distPath = "dist/"

const path = {
	build: {
		html: distPath,
		css: distPath + "/css/",
		js: distPath + "js/",
		images: distPath + "img/",
		//fonts: distPath + "fonts/"
	},
	src: {
		html: srcPath + "*.html",
		css: srcPath + "scss/style.scss",
		js: srcPath + "js/*.js",
		images: srcPath + "img/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}",
		//fonts: srcPath + "fonts/**/*.{eot,woff,woff2,ttf,svg}"
	},
	watch: {
		html: srcPath + "**/*.html",
		js: srcPath + "js/**/*.js",
		css: srcPath + "scss/**/*.scss",
		images: srcPath + "img/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}",
		//fonts: srcPath + "fonts/**/*.{eot,woff,woff2,ttf,svg}"
	},
	clean: "./" + distPath
}

//-------ЛОКАЛЬНЫЙ СЕРВЕР---------------------------------------------------------------------//
function serve() {
	browserSync.init({
		server: {
			baseDir: "./" + distPath
		}
	});
}


function html() {
	return src(path.src.html, { base: srcPath })
		.pipe(plumber(                            //ОТСЛЕЖИВАЕМ ОШИБКИ
			notify.onError({
				title: "HTML Error",
				message: "Error: <%= error.message %>"
			})
		))
		.pipe(fileInclude())                      //ВОЗМОЖНОСТЬ ДОБАВЛЕНИЯ ФАЙЛОВ С ПОМОЩЬЮ @@INCLUDE
		.pipe(replace(/@img\//g, '../img/'))      //ПРЕОБРАЗУЕТ @IMG В ../IMG
		.pipe(ifPlugin(isBuild, webpHtmlNosvg())) //ДОБАВЛЯЕТ WEBP ФОРМАТ ИЗОБРАЖЕНИЯ ЕСЛИ БРАУЗЕР ПОЗВОЛЯЕТ
		.pipe(ifPlugin(isBuild,                   //ДОБАВЯЛЕТ ДАТУ К ФАЙЛАМ ПОДКЛЮЧЕНИЯ CSS И JS
			versionNumber({
				'value': '%DT%',
				'append': {
					'key': '_v',
					'cover': 0,
					'to': [
						'css',
						'js',
					]
				},
				'output': {
					'file': 'gulp/version.json'
				}
			})
		))
		.pipe(removeHtmlComments())              //УДАЛЯЕТ КОММЕНТЫ ИЗ HTML
		.pipe(dest(path.build.html))             //ВЫГРУЖАЕТ В ПАПКУ SRC
		.pipe(browserSync.reload({ stream: true }));
}

function css() {
	return src(path.src.css, { base: srcPath + "scss/" })
		.pipe(plumber(
			notify.onError({
				title: "SCSS Error",
				message: "Error: <%= error.message %>"
			})
		))
		/*.pipe(replace(/@img\//g, '../img/'))*/  //ОШИБКА ОТОБРАЖЕНИЯ ИЗОБРАЖЕНИЙ
		.pipe(sass())                             //КОМПИЛЯТОР SCSS В СSS
		.pipe(gulpGroupCssMedia())                //ГРУППИРУЕТ МЕДИА-ЗАПРОСЫ
		.pipe(ifPlugin(isBuild, webpCss({         //ДОБАВЛЯЕТ КЛАССЫ В CSS (ДЛЯ ДОБАВЛЕНИЯ WEBP КАРТИНОК)
			webpClass: ".webp",
			noWebpClass: ".no-webp"
		})))
		.pipe(autoprefixer({
			grid: true,
			ovverideBrowserlist: ['cover 99.5%'],
			cascade: false
		}))
		.pipe(cssbeautify({                      //ДЕЛАЕТ КОД КРАСИВЫМ :)
			indent: '   ',
		}))
		.pipe(dest(path.build.css))
		.pipe(cssnano({                          //МИНИФИКАЦИЯ СSS
			zindex: false,
			discardComments: {
				removeAll: true
			}
		}))
		.pipe(removeComments())
		.pipe(rename({                           //ПЕРЕИМЕНОВЫВАЕМ SCSS В СSS И ДОБАВЛЯЕМ СУФФИКС .MIN
			suffix: ".min",
			extname: ".css"
		}))
		.pipe(dest(path.build.css))
		.pipe(browserSync.reload({ stream: true }));
}

function js() {
<<<<<<< HEAD
   return src(path.src.js, { base: srcPath + "js/" })
      .pipe(plumber(
         notify.onError({
            title: "JS Error",
            message: "Error: <%= error.message %>"
         })
      ))
      .pipe(replace(/@img\//g, '../img/'))
      .pipe(rigger())
      .pipe(dest(path.build.js))
      .pipe(uglify())                      //СЖИМАЕМ JS
      .pipe(rename({
         suffix: ".min",
         extname: ".js"
      }))
      .pipe(dest(path.build.js))
      .pipe(browserSync.reload({ stream: true }));
=======
	return src(path.src.js, { base: srcPath + "js/" })
		.pipe(plumber(
			notify.onError({
				title: "JS Error",
				message: "Error: <%= error.message %>"
			})
		))
		.pipe(rigger())
		.pipe(dest(path.build.js))
		.pipe(uglify())                      //СЖИМАЕМ JS
		.pipe(rename({
			suffix: ".min",
			extname: ".js"
		}))
		.pipe(dest(path.build.js))
		.pipe(browserSync.reload({ stream: true }));
>>>>>>> f88c9849c6a7e247b81eb402a8961fb989fb7cc0
}

function images() {
	return src(path.src.images, { base: srcPath + "img/" })
		.pipe(plumber(
			notify.onError({
				title: "IMAGE Error",
				message: "Error: <%= error.message %>"
			})
		))
		.pipe(newer(path.build.images))                  //ЕСЛИ КАРТИНКА УЖЕ ДОБАВЛЕНА, ТО ЕЕ НЕ ОПТИМИЗИРУЕТ
		.pipe(ifPlugin(isBuild, imagemin([
			imagemin.gifsicle({ interlaced: true }),
			imagemin.mozjpeg({ quality: 80, progressive: true }),
			imagemin.optipng({ optimizationLevel: 5 }),
			imagemin.svgo({
				plugins: [
					{ removeViewBox: true },
					{ cleanupIDs: false }
				]
			})
		])))
		.pipe(dest(path.build.images))
		.pipe(browserSync.reload({ stream: true }));
}

function webpImages() {                                             //ДОБАВЛЯЕТ ПОМИМО PNG ИЛИ JPEG ЕЩЕ + WEBP
	return src(path.src.images, { base: srcPath + "img/" })
		.pipe(imagewebp())
		.pipe(dest(path.build.images))
}

//function fonts() {
//   return src(path.src.fonts, { base: srcPath + "fonts/" })
//      .pipe(dest(path.build.fonts))
//      .pipe(browserSync.reload({ stream: true }));
//}

function clean() {                    //ПРИ УДАЛЕНИИ ФАЙЛА ИЗ SRC УДАЛЯЕТ ФАЙЛ ИЗ DIST
	return del(path.clean)
}

function zip() {                             //ЗАПАКОВКА В ZIP (npm run zip)
	return src(`${distPath}/**/*.*`, {})
		.pipe(plumber(
			notify.onError({
				title: "ZIP Error",
				message: "Error: <%= error.message %>"
			})
		))
		.pipe(zipPlugin(`project.zip`))
		.pipe(dest('./'))
}

function watchFiles() {                         //ОТСЛЕЖИВАЕТ АВТОМАТИЧЕСКИ ВСЕ ИЗМЕНЕНИЯ В ПРОЕКТЕ
	gulp.watch([path.watch.html], html)
	gulp.watch([path.watch.css], css)
	gulp.watch([path.watch.js], js)
	gulp.watch([path.watch.images], images)
	//gulp.watch([path.watch.fonts], fonts)
}

const mainTasks = gulp.parallel(html, css, js, images)

const dev = gulp.series(clean, mainTasks, gulp.parallel(watchFiles, serve))  //ТАСКИ ДЛЯ РЕЖИМА DEV 
const build = gulp.series(clean, mainTasks, webpImages)                      //ТАКИ ДЛЯ РЕЖИМА BUILD
const deployZip = gulp.series(mainTasks, zip)


exports.html = html
exports.css = css
exports.js = js
exports.images = images
exports.webpImages = webpImages
//exports.fonts = fonts
exports.clean = clean
exports.build = build
//exports.watch = watch
exports.default = dev
exports.zip = deployZip