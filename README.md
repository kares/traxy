# TraXy

[Google Translate][0] [Proxy][1] (in Node.js)

## The Proxy

    var http = require('http'), 
        httpProxy = require('http-proxy');

    var server = httpProxy.createServer({
      target: { host: 'translate.google.com', port: 80 },
      changeOrigin: true
    });

    var port = process.env.PORT || 5000;
    server.listen(port, function () {
      console.log("waiting for requests on " + port);
    });

This is all there is to it, since Google Translate serves most of it's assets 
from the same domain using path e.g. *<script src="/translate/[...]/some.js">*.

## Copyright

Copyright (c) 2013 [Karol Bucek](https://github.com/kares).
See LICENSE (http://www.linfo.org/mitlicense.html) for details.

[0]: http://translate.google.com/
[1]: https://github.com/nodejitsu/node-http-proxy