const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('messages/newMessage', { title: 'Create New Message' });
})

// router.post('/', (req, res) => {
//     // const { user, message } = req.body;
//     // const user = req.body.user;
//     // const message = req.body.message;
//     const newMessage = {
//         user: req.body.messageUser,
//         text: req.body.messageText,
//         added: new Date()
//     };
    
//     // router.use(express.urlencoded({ extended: true }));

//     messages.push(newMessage);
//     res.redirect('/');
// });



module.exports = router;