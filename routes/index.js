const express = require('express');
const router = express.Router();

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

// GET home page
router.get('/', (req, res) => {
    res.render('index', { title: 'Mini Messageboard', messages: messages });
});

// GET new message form
router.get('/new', (req, res) => {
    res.render('form', { title: 'New Message' });
});

// POST new message
router.post('/new', (req, res) => {
    const messageText = req.body.messageText;
    const messageUser = req.body.messageUser;

    messages.push({
        text: messageText,
        user: messageUser,
        added: new Date()
    });

    res.redirect('/');
});
// GET individual message
router.get('/message/:id', (req, res) => {
  const messageId = req.params.id;
  const message = messages[messageId];
  
  if (message) {
    res.render('message-detail', { 
      title: 'Message Details', 
      message: message 
    });
  } else {
    res.status(404).send('Message not found');
  }
});
module.exports = router;