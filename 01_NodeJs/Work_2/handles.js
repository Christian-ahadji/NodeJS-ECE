module.exports = {
  serverHandle: function (req, res) {

    const url = require('url');
    const querystring = require('querystring');

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
}