var http = require('http');
var cfenv = require("cfenv")
var os = require('os');
var port = process.env.PORT || 5000;

var appEnv = cfenv.getAppEnv()


http.createServer(function (req, res) {
  //console.log (JSON.stringify(appEnv.getServices()));
  //console.log(appEnv.getService("testcups").credentials.admin);
  //console.log(appEnv.getService("testcups").credentials.pass);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('TEST CUPS { admin= ' + appEnv.getService("testcups").credentials.admin + ' pass= ' + appEnv.getService("testcups").credentials.pass + '}' + '\n');
}).listen(port, function() {
  
  console.log("Listening on " + port);
});
