'use strict';

var gulp = require('gulp');

gulp.task('sys-build', function() {
  var builder = require('systemjs-builder');
  var path = require('path');

  builder.build('scripts/test', {
    baseURL: path.resolve('app/bower_components'),
    paths: {
      'scripts/*': path.resolve('app/scripts/*.js')
    }
  }, 'app/.out/sys-build-test.js')
  .then(function() {
    console.log('Build complete');
  })
  .catch(function(err) {
    console.log('Build error');
    console.log(err);
  });
});
