const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const viewPath = path.join(__dirname, 'src/views')

app.set ('views', viewPath)
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log('App listen on port ' + port)
})