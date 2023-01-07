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
const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages});
});

router.get('/new', function(req, res, next) {
  res.render('form');
});

router.post('/new', (req, res, next)=> {
  const message = {
    text: req.body.message,
    user: req.body.user,
    added: new Date()
  }
  messages.push(message)
  res.redirect('/')
})




module.exports = router;
