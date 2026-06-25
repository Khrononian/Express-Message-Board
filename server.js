const express = require('express');
const path = require('node:path');
const app = express();
const port = 4000;
const messagesRouter = require('./routes/messages');

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
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { title: 'Mini Message Board', messages });
});

app.use('/create', messagesRouter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.ejs'));
})
app.post('/create', (req, res) => {
    const newMessage = {
        user: req.body.messageUser,
        text: req.body.messageText,
        added: new Date()
    };
    messages.push(newMessage);
    res.redirect('/');
});

app.listen(port, (error) => {
    if (error) throw error;

    console.log(`Server is running on http://localhost:${port}`);
});
