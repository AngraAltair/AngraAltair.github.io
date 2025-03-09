var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
    var parsedUrl = new URL(req.url, 'http://localhost');
    var pathname = parsedUrl.pathname;
    var isoTime = parsedUrl.searchParams.get('iso');

    if (!isoTime) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Missing ISO time' }));
    }

    var date = new Date(isoTime);
    var result;

    if (pathname === '/api/parsetime') {
        result = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds(),
        };
    } else if (pathname === '/api/unixtime') {
        result = { unixtime: date.getTime() };
    }

    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(Number(process.argv[2]));