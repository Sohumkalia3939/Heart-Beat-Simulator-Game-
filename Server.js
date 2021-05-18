var express = require('express');
const ejs = require('ejs');
const PORT = process.env.PORT || 3000;

// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));
// Set the view engine to ejs
app.set('view engine', 'ejs');
// Port website will run on
app.listen(PORT);

// *** GET Routes - display pages ***
// Root Route
app.get('/', function (req, res) {
    res.render('index');
});
app.get('/GameOver',function (req, res) {
    res.render('GameOver')
})

app.get('/YouAreTheWinner',function (req, res) {
    res.render('YouAreTheWinner')
})