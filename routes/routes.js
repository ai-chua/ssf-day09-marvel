// Load required libraries from node_modules
const express = require('express')

module.exports = () => {
  console.log('In the router!')
  const router = express.Router()
  const getChar = require('../public/javascript/get_character')

  router.get('/search', async (req, res) => {
    const charToFind = req.query.nameStartsWith
    const resultsFull = await getChar(charToFind)
    const results = await resultsFull.data.results
    results.forEach(e => console.info(`${e.name} - ID: ${e.id}`))
    res.status(201)
    res.type('text/html')
    res.render('search', {results})
  } )

  router.get(['/', '/index.html'], async (req, res) => {
    res.status(200)
    res.type('text/html')
    res.render('index')
  })

  return router
}