const gulp = require("gulp"),
  sass = require("gulp-sass"),
  htmlMin = require("gulp-minify-html"),
  concat = require("gulp-concat"),
  cleanCSS = require("gulp-clean-css"),
  autoprefixer = require("gulp-autoprefixer"),
  uglify = require("gulp-uglify"),
  babel = require("gulp-babel"),
  browserSync = require("browser-sync").create();

//HTML copy
gulp.task("html", () => {
  gulp
    .src("src/views/*.html")
    .pipe(htmlMin())
    .pipe(gulp.dest("docs"));
});

//favicon copyg
gulp.task("ico", () => {
  gulp.src("src/views/*.ico").pipe(gulp.dest("docs"));
});

// Img copy
gulp.task("img", () => {
  gulp.src("src/img/*").pipe(gulp.dest("docs/img"));
});
// Javascript copy&minify
gulp.task("js", () => {
  gulp
    .src("src/js/*.js")
    .pipe(concat("script.js"))
    .pipe(
      babel({
        presets: ["@babel/env"]
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest("docs/js"));
});

// minify css
gulp.task("minify-css", () => {
  return gulp
    .src("src/css/*.css")
    .pipe(
      cleanCSS({
        compatibility: "*"
      })
    )
    .pipe(gulp.dest("docs/css"));
});
// sass compile
gulp.task("sass", () => {
  return (
    gulp
      .src("src/scss/**/*.scss")
      .pipe(sass().on("error", sass.logError))
      // autoprefixer added
      .pipe(autoprefixer())
      // cleanCSS added
      .pipe(cleanCSS({ compatibility: "ie8" }))
      .pipe(gulp.dest("docs/css"))
      .pipe(browserSync.stream())
  ); //stream to browser
});

// watch&serve
gulp.task(
  "serve",
  gulp.series("sass", () => {
    browserSync.init({
      server: "./docs"
    });
    gulp
      .watch("src/scss/**/*.scss", gulp.series("sass"))
      .on("change", gulp.series("sass"))
      .on("change", browserSync.reload);
    gulp
      .watch("src/js/*.js", gulp.series("js"))
      .on("change", gulp.series("js"))
      .on("change", browserSync.reload);
    gulp
      .watch("src/views/*.html", gulp.series("html"))
      .on("change", gulp.series("html"))
      .on("change", browserSync.reload);
  })
);
