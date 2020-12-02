
/*
Simple express CRUD app example
*/

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./routes')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
<<<<<<< HEAD
  response.json({ info: 'Node.js, Express, and Postgres APIZCV' })
=======
  response.json({ info: 'Node.js, Express, and Postgres APIw' })
>>>>>>> 13839749ccee064007f57729e2bed824eed55f43
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(port, () => {
  console.log(`simple-express-crud running on port ${port}.`)
})
