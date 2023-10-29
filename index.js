const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

const { listOfGirls } = require('./models/list');
const { listOfQuestions } = require('./models/listOfQuestions');
const { listOfResponse } = require('./models/listOfResponse');

app.use(cors())
app.use(express.json())

app.listen(port, () => {
  console.log(`Node API app is running on port ${port}`);
});

app.get('/listGirls', (request, response) => {
    response.send(listOfGirls());
  });

app.get('/listQuestions', (request, response) => {
    response.send(listOfQuestions());
  });

app.get('/listOfResponse', (request, response) => {
    response.send(listOfResponse());
  });