const fetch = require('node-fetch')
const withQuery = require('with-query').default
const md5 = require('md5');
const ts = require('time-stamp');

module.exports = async (char) => {
	const timeStamp = ts('YYYYMMDDHHMMSS')
	const hashToUse = md5([timeStamp, process.env.PRIVATE_API_KEY, process.env.PUBLIC_API_KEY].join(""))
	console.log(hashToUse)
	const url = withQuery(process.env.ENDPOINT, {
		nameStartsWith: char,
		apikey: process.env.PUBLIC_API_KEY,
		ts: timeStamp,
		hash: hashToUse
	})
	console.info(`CHAR TO SEARCH> ${char}`)
	console.info(`TS> ${timeStamp}`)
	console.info(`PRIVATE KEY> ${process.env.PRIVATE_API_KEY}`)
	console.info(`PUBLIC KEY> ${process.env.PUBLIC_API_KEY}`)
	console.info(`${hashToUse}`)
	console.log(url)
	let rawResults = await fetch(url)
	const results = await rawResults.json()
	return results
}