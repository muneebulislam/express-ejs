var express = require('express');
var app = express();
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/profile/:name', (req, res) => {
    var data = {name: 'name1', age: 40 ,hobbies: ['eating','fighting','playing']}
    res.render('profile', {name: req.params.name, data: data});
});

app.listen('3000', () => {
    console.log('listening on port 3000');
});