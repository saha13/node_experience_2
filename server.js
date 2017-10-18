const url = require('url')
const express = require('express')
const bodyParser = require('body-parser');
const server = express()

server.use(express.static('public.html'))
server.use(bodyParser.json());

function greets () {
    var greet = ["Hei", "Hallo", "hei hei"];
    var random = greet[Math.floor((Math.random()*greet.length))];
    return random;
}

server.get('/', function(req, res) {
  let staticApp = readTextFile("public/index.html");
  res.send(staticApp);
});

server.get('/random/:id', function (req, res) {
  res.send(greets() +" "+ req.params.navn);

})

server.listen(process.env.PORT || 8080, function () {
  console.log(greets() + " christian")
  console.log('server listening on port 8080!')
})

server.get('/greet/:id', function(req, res) {
  res.send('user ' + req.params.id);
});