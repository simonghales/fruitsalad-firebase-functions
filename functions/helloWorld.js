const functions = require('firebase-functions');

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send("Hello from Firebase!");
// });

const helloWorldSequel = (request, response) => {
  response.send("Hello from Firebase.... again!");
};

exports.helloWorldSequel = helloWorldSequel;