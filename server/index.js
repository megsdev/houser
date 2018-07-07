const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const controller = require('./controller')
const cors = require('cors')

require('dotenv').config({ path: `${__dirname}/.env`})

const app = express()

app.use(cors())
app.use( bodyParser.json())

massive(process.env.CONNECTION_STRING, {
    scripts: `${__dirname}/db`
}).then( dbInstace => {
    app.set('db', dbInstace)
}).catch(error => console.log(error))

app.get('/api/houses', controller.getAll)
app.post('/api/houses', controller.create)
app.delete('/api/houses/:id', controller.delete)

const port = 4000
app.listen( port, () => { console.log(`listening on port ${port}`) })