const express = require('express');
const router = express.Router();
const app = express();
const db = require('../db/queries')

app.use(express.urlencoded({ extended: true }))

router.get('/', (req, res) => {
    res.render('messages/newMessage', { title: 'Create New Message' });
})

router.post('/', async (req, res) => {
    const { message, username } = req.body;
    const timestamp = new Date();
    
    console.log('Test',{ message, username, timestamp });
    await db.insertMessage(message, username, timestamp);
    
    res.redirect('/');
});

module.exports = { router };