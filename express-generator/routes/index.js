const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

const express = require('express');
const app = express()
const router = express.Router();

app.set('view engine', 'ejs');

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages});
});


app.listen(3000)

module.exports = router;
