const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

app.get('/', (req, res) => {
  res.end('Hello World!');
});

app.get("/testres", (req, res) => {
    fs.readFile(__dirname + '/' + 'testres.json', 'utf8', (err, data) => {
        res.end(data);
    });
});

app.listen(env.process.PORT || 3000, () => {
    console.log(`app listening at http://localhost:${port}`)
  });