const {readFileSync} = require('fs');

let listOfGirls = () => JSON.parse(readFileSync('./listOfGirls.json'));

module.exports = {listOfGirls}