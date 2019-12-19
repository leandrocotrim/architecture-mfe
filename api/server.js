const express = require('express');

const app = express();

app.get('/repos', (req, res) => {
  return res.json(
    [
      { login: '1.0.1', feature: true },
      { login: '1.3.1', feature: false }
    ]
  );
});

const port = process.env.PORT || 9006;
app.listen(port);

console.log();
console.log(`Version API works...`);
console.log(`http://localhost:${port}`);
