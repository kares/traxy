var http = require('http'), //url = require('url'),
    httpProxy = require('http-proxy');

//var proxy = new httpProxy.RoutingProxy();

/*
var server = httpProxy.createServer(
  harmon([], actions),
  'translate.google.com', 80
);
*/

/*
var server = http.createServer(function (req, res) {
  //console.log('request  : ', req);
  //console.log('response : ', res);
  
  proxy.proxyRequest(req, res, {
    //host: 'translate.google.com', port: 80,
    host: 'www.seznam.cz', port: 80,
    enable  : { xforward: true },
  });
});
*/


var server = httpProxy.createServer({
  target : { // options for proxy target
    host : 'translate.google.com', port : 80, 
  },
  changeOrigin: true // google needs this !
});


var port = process.env.PORT || 5000;
server.listen(port, function () {
  console.log("waiting for requests on " + port);
});