const http = require('http');

const server =  http.createServer((req, res) => {
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.end('Welcome to techcrush backend server');

    //handling requests
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(JSON.stringify({message: 'Home Route'}));
    }else if (req.url === '/students') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(JSON.stringify([
            {id:1, name: 'John'},
            {id:2, name: 'Jane'},
            {id:3, name: 'Doe'}
        ]));
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end(JSON.stringify({error: 'Route not found'}));
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});