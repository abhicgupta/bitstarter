var express = require('express');
var app = express();
var fs =require('fs');
app.use(express.logger());

app.get('/', function(request, response) {
  var web = fs.readFileSync('index.html');
  var str = web.toString();
  response.send(str);
  //sponse.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
