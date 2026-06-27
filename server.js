const express = require('express');
const path = require('node:path');
const app = express();
const port = 4000;
const { router, messages } = require('./routes/messages');

app.use(express.urlencoded({ extended: true }))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { title: 'Mini Message Board', messages });
});

app.use('/create', router);

app.listen(port, (error) => {
    if (error) throw error;

    console.log(`Server is running on http://localhost:${port}`);
});
