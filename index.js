const express = require('express')
const app = express()
const cors = require('cors')

const knex = require('knex') // Package also file ./node_modules/knex/index.js
const config = require('./knexfile')[process.env.NODE_ENV || 'development']
const database = knex(config)

app.use(cors())

app.get("/dogs", (request,response) => {
    database('dogs').select()
        .then(dogs => response.json({dogs}))
})

app.get("/dogs/:id", (request,response) => {
    database('dogs').select().where({ id: request.params.id })
        .then(dog => response.json({dog}))
})


app.listen(5000)