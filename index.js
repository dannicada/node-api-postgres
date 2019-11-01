const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

//handling a get request on the root (/) URL
app.get('/', (request, response) => {
  response.json({info: 'Node.js,Express, and Postgres API' })
})

//set app to listen on specified port
app.listen(port, ()=> {
  console.log(`App running on port ${port}.`)
})