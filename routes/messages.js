const express = require('express');
const router = express.Router();
const app = express();

const messages = [
    {
        text: 'Hey there!',
        user: 'Amanda',
        added: new Date()
    },
    {
        text: 'Hello!',
        user: 'John',
        added: new Date()
    }
]

app.use(express.urlencoded({ extended: true }))

router.get('/', (req, res) => {
    res.render('messages/newMessage', { title: 'Create New Message' });
})

router.post('/', (req, res) => {
    const newMessage = {
        user: req.body.messageUser,
        text: req.body.messageText,
        added: new Date()
    };
    messages.push(newMessage);
    res.redirect('/');
});

module.exports = { router, messages };