const http = require('http');
const url = require('url');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Slot machine\n');

  if(req.url='/spin')
  {
      console.log('spinning...');
  }
  else if(req.url='/play')
  {
      console.log('playing...');
  }

  var add = window.location.href;

var q = url.parse(add, true);

if(q.pathname=='/spin'){
    console.log('spinning');
}

if(q.pathname=='/play' && q.search == null)
{
    console.log('playing');
}
if(q.pathname=='/play' && q.search != null)
{
    console.log('playing...' + "amount: " + q.query["amount"]);
}
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

