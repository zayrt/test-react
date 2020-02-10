var express = require('express');
var app = express();
var port = 3000;
var path = require('path');

app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/src/index.html'));
});

app.listen(port, () => console.log(`JS tester app listening on port ${port}!`));
