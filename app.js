const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config')
const router = require('./router/router')
const app = express()

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(router)
app.listen(config.app.port, () => {
  console.log(`App running on port ${config.app.port}.`)
})