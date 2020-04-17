const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')


var cors = require('cors');
var express = require('express');
var app = express();

app.use(cors());
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/quests', async function (req, res) {
  const adapter = new FileSync('db.json')
  const db = low(adapter);
  const quests = await db.get('quests').value();
  console.log('quests requested', quests.length)
  res.json({ quests });
});


app.listen(3333, function () {
  console.log('Example app listening on port 4200!');
});