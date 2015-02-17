"use strict";

var gulp = require("gulp");
var mocha = require("gulp-mocha");
var jshint = require("gulp-jshint");

gulp.task("lint", function () {
    gulp.src("{,test/,lib/}*.js")
        .pipe(jshint("test/.jshintrc"))
        .pipe(jshint.reporter("default"))
  .pipe(jshint.reporter("fail"));
});

gulp.task("test", function () {
    gulp.src("test/*.js", {read: false})
        .pipe(mocha({reporter: "nyan"}));
});

gulp.task("default", ["lint", "test"]);
