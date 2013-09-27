var http = require('http'),
    httpProxy = require('http-proxy');

var server = httpProxy.createServer({
  target: { // options for proxy target
    host: 'translate.google.com', port: 80, 
  },
  changeOrigin: true // google needs this !
});

var port = process.env.PORT || 5000;
server.listen(port, function () {
  console.log("waiting for requests on " + port);
});