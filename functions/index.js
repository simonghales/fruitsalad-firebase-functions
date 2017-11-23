const functions = require('firebase-functions');
const helloWorldFunctions = require('./helloWorld');
const drawDuoFunctions = require('./drawDuo/index');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.helloWorldSequel = functions.https.onRequest((request, response) => {
  return helloWorldFunctions.helloWorldSequel(request, response);
});

exports.startGame = functions.https.onRequest((request, response) => {
  console.log('Starting game');
  const sessionCode = 'SILLYKITTENS';
  drawDuoFunctions.startGame(sessionCode);
  response.sendStatus(200);
  // response.send('Starting game');
});