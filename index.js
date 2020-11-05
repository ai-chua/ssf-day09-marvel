// Load .env file
require('dotenv').config();

// console.log(`${ts('YYYYMMDDHHMMSS')} ${process.env.PRIVATE_API_KEY} ${process.env.PUBLIC_API_KEY}`)
// console.log(md5(`${ts('YYYYMMDDHHMMSS')} ${process.env.PRIVATE_API_KEY} ${process.env.PUBLIC_API_KEY}`))

const getChars = require('./public/javascript/getCharacter')

console.log(getChars('captain'))