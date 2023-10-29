const {readFileSync} = require('fs');

let listOfQuestions = () => JSON.parse(readFileSync('./questions.json'));

module.exports = {listOfQuestions}