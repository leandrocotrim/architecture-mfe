const express = require('express');
const request = require('request');

const app = express();

app.use('/scripts', express.static('./node_modules'));
app.use('/app', express.static(__dirname + '/src'));

app.get('/repos', (req, res) => {
  request('http://localhost:9006/repos', (error, response, body) => {
      return res.json( JSON.parse(body));
    }
  );
});

app.get('*', (req, res) => res.sendFile(__dirname + '/src/index.html'));

const port = process.env.PORT || 9005;
app.listen(port);

console.log();
console.log(`Wrapper works...`);
console.log(`http://localhost:${port}`);
