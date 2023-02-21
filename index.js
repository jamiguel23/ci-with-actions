var http = require("http");
http.createServer(function(req,res) {

  var path = req.url.toLowerCase();

  switch(path){

    case "/": 
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('home hit');
      break;

    case "/about": 
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('about page hit');
      break; 

    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('nothing page');
      
  }

}).listen(process.env.PORT || 3000);
