const {readFileSync} = require('fs');

let listOfResponse = () => JSON.parse(readFileSync('./response.json'));

module.exports = {listOfResponse}