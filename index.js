// Load .env file
require('dotenv').config();

// Load required libraries from node_modules
const express = require('express')
const hbs = require('express-handlebars')

// Configure the environment
const PORT = parseInt(process.env.PORT) || 3000

// Create an instance of the express application
const app = express()

// Configure the public and static files
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/routes'))

// Configure handlebars to manage views
app.engine('hbs', hbs({ defaultLayout: 'default.hbs' }))
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

// Load router from routes.js
const router = require('./routes/routes')

app.use(router())

// Start express
app.listen(PORT, () => { // first parameter = port number
	console.log(`Application started on port ${PORT} at ${new Date()}`)
})

// const getChars = require('./public/javascript/get_character')

// console.log(getChars('captain'))