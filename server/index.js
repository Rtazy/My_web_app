
const express = require('express')
const db = require('./queries')
const bodyParser = require('body-parser')
const cors = require("cors");
const app = express()
const port = 3001
app.use(cors());
app.use(bodyParser.json())
app.use(
bodyParser.urlencoded({
extended: true,
} )
)
app.get('/', (request, response) => {
response.json({ info: 'Backend with Express Node and Postgres' })
})
app.listen(port, () => {
console.log(`App running on port ${port}.`)
})
app.get('/getPost', db.getPost)
app.post('/createPost', db.createPost)
app.delete('/deletePost', db.deletePost)
