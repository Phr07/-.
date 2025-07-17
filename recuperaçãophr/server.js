const express = require('express')
const app = express()
const parser = require('body-parser')


app.use(parser.urlencoded({extended: false}))
app.use(parser.json())
app.set('view engine','ejs')

app.get('/', (req, res) => {
    res.render('index')

})
app.get('/soma', (req, res) => {
    var num = (req.query.n1-0)*2
    var nome = req.query.name

    var nsei = "oi " + nome + " o dobro do número é " + num

    res.render('ret', {nsei})

})



app.listen(8080)
console.log("servidor rodando em: http://localhost:8080/?")
