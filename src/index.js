const express = require('express')
const morgan = require('morgan')
const path = require('path')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000

console.log(path.join(__dirname,'public'))
app.use(express.static(path.join(__dirname,'public')))
app.use(morgan('combined'))
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'views'));

app.get('/ca', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})