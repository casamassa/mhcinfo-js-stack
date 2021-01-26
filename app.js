const express = require('express')
const path = require('path')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', require('./controllers/index'))

let port = 3000;
app.listen(port, () => {
    console.log('Server is up and running on port: ' + port);
});