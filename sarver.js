//console.log('welcome to youtube')

//  1. improt area

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/ hello', function (req, res) {
    res.send('create a sarver')
  })
app.listen(4000)