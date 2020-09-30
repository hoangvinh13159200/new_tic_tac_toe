const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const app = express()
const port = 3000

const router = require('./routes/index')

app.use(express.static(path.join(__dirname, './public')))
app.set('views', path.join(__dirname, './resources/views'))

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

router(app)

app.listen(port, ()=>{
    console.log(`App listening at http://localhost:${port}`)
})