const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;
const db = require('./config/db');

// Connect to DB
db.connect();

const route = require('./routes');

// import static file
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// change suffix file
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Home, search, contact

// Route init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
