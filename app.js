var koa = require('koa');
var send = require('koa-send');

var app = koa();

app.use(function *(next) {
  yield send(this, this.path, {
    root: './dist'
  });

  if (this.status === 404) {
    yield send(this, 'index.html', {
      root: './dist'
    });
  }
});

if (!module.parent) {
  app.listen(5000);
}