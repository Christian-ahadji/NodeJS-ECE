var http = require('http');
var url = require('url');
var querystring = require('querystring');

const serverHandle = function(req, res) {

    var page = url.parse(req.url).pathname;
    var params = querystring.parse(url.parse(req.url).query);

    if (page == '/') {
        res.writeHead(200, {"Content-type" : "text/plain"});
        res.write ('On the page /hello, you will enter your name in the l\'url');
    }
    else if ((page === '/hello') && ('name' in params)) {

        res.writeHead(200, {"Content-type" : "text/plain"});
        if (params['name'] == 'Christian') {
            res.write ('Hello, my name is ' + params['name'] + ', i\'m ING4 ECE student !');
        }
        else {
            res.write ('Hello ' + params['name'] + ' !');
        }
    }
    else {
        res.writeHead(404, {"Content-type" : "text/plain"});
        res.write ('Sorry, this page does not exist!');
    }

    res.end();
}

var server = http.createServer(serverHandle);

server.listen(8080);