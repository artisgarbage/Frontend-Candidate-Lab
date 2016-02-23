var gulp = require('gulp'),
  $ = require('gulp-load-plugins')({
    rename: {
      'gulp-css-url-adjuster': 'cssurls'
    }
  });

gulp.task('styles', function () {
  return gulp.src([
      'app/styles/styl/main.styl'
    ])
    .pipe($.sourcemaps.init())
    .pipe($.stylus({'include css': true}))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('app/styles/css'));
});

gulp.task('lint', function () {
  return gulp.src('app/scripts/**/*.js')
    .pipe($.jshint('.jshintrc'))
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.jscs());
});

gulp.task('wiredep', function () {
  var wiredep = require('wiredep').stream;

  gulp.src([
    'app/**/*.html'
  ])
  .pipe(wiredep({
    ignorePath: '../',
    exclude: [
      'app/bower_components/jquery/dist/jquery.js',
      'app/bower_components/modernizr/modernizr.js'
    ],
  }))
  .pipe(gulp.dest('app'));
});

gulp.task('watch', function () {
  $.livereload.listen();

  gulp.watch([
    'app/styles/css/**/*.css',
    'app/scripts/**/*.js',
    'app/templates/**/*.hbs',
    'app/images/**/*.{jpg, gif, png, svg}',
    'app/*.html',
    ]).on('change', $.livereload.changed);
  gulp.watch('bower.json', ['wiredep']);
  gulp.watch('app/scripts/**/*.js', ['lint']);
  gulp.watch('app/styles/**/*.styl', ['styles']);
  gulp.watch('bower.json', ['wiredep']);
});

gulp.task('connect', ['styles'], function () {
  var serveStatic = require('serve-static'),
    serveIndex = require('serve-index');

  var app = require('connect')()
    .use(require('connect-livereload')({ port: 35729}))
    .use(serveStatic('app'))
    .use(serveIndex('app'));

  require('http').createServer(app)
    .listen(1337)
    .on('listening', function () {
      console.log('Started connect server on http://localhost:1337');
    });
});

gulp.task('serve', ['connect', 'watch'], function () {
  require('opn')('http://localhost:1337');
});

gulp.task('default', function () {
  gulp.start('lint');
  gulp.start('watch');
});

gulp.task('clean', function (done) {
  require('del')(['dist'], done);
});

gulp.task('clear', function (done) {
  return $.cache.clearAll(done);
});
