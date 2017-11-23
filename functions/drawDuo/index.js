const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

let sessionRef = null;
let storedSession = {};
let storedGame = {};
let storedPairs = {};

const generateDrawDuoGame = (sessionData, sessionKey) => {
  return {
    currentState: 'pending',
    totalRounds: 2,
    currentRound: false,
    pairs: {},
    rounds: {},
    entries: {},
    drawings: {},
    guesses: {},
  }
};

const generatePairs = (sessionData, sessionKey) => {
  const users = sessionData.users;
  const userKeys = Object.keys(users);

  const pairs = [], size = 2;

  while (userKeys.length > 0) {
    pairs.push(userKeys.splice(0, size));
  }

  pairs.forEach((pair) => {
    let pairUsers = {};
    pair.forEach((user) => {
      pairUsers[user] = true;
    });
    const pairRef = admin.database().ref(`/sessions/${sessionKey}/drawDuo`).child('pairs').push(pairUsers);
    storedPairs[pairRef.getKey()] = pairUsers;
  });

};

const generateRounds = (sessionData, sessionKey) => {
  console.log('storedGame', storedGame);
  const totalRounds = storedGame.totalRounds;
};

const startGame = (sessionCode) => {

  const sessionKey = 'HALES';

  sessionRef = admin.database().ref(`/sessions/${sessionKey}`);

  sessionRef.once('value', snapshot => {
    storedSession = snapshot.val();
    console.log('loaded session', storedSession);

    const currentState = 'playing';
    const totalRounds = 2;
    const pairs = {};
    const rounds = {};
    storedGame = generateDrawDuoGame(storedSession, sessionKey);


    sessionRef.child('/drawDuo').set(storedGame)
      .then(() => {
        generatePairs(storedSession, sessionKey);
        generateRounds(storedSession, sessionKey);
        nextRound(storedGame);
      });

  });

  console.log('Starting game');

  // set currentState => playing
  // set totalRounds
  // create pairs
  // create rounds -> generate prompts for all pairs
  // call nextRound

};

const continueGame = () => {

  const pendingAction = '';
  const awaitingHostAction = false;

  if (pendingAction === 'showGameCompleted') {
    showGameCompleted();
  } else if (pendingAction === 'continueRound') {
    continueRound();
  } else if (pendingAction === 'guessesSubmitted') {
    guessesSubmitted();
  } else if (pendingAction === 'votesSubmitted') {
    votesSubmitted();
  } else if (pendingAction === 'answerRevealed') {
    answerRevealed();
  } else {
    console.error(`Unknown pending action: ${pendingAction}`);
  }

};

const nextRound = (game) => {

  console.log('Calling next found');

  const round = true;

  if (!round) {
    showGameResults(game);
  } else {
    startRound(game);
  }

};

const showGameResults = () => {

  console.log('Show game results');

  const currentState = 'results';
  const pendingAction = 'showGameCompleted';
  const awaitingHostActionTimer = (30 * 1000);
  const awaitingHostAction = true;

  // set currentState => results
  // set pendingAction => showGameCompleted
  // HOST - start 30 sec timer
  // HOST - call continueGame

};

const showGameCompleted = () => {

  console.log('Show game completed');

  const currentState = 'completed';

  // set currentState => completed

};

const startRound = () => {

  console.log('Start round');

  const round = 'something';
  const currentRound = round;
  beginRoundDrawing();

  // set currentRound
  // call beginRoundDrawing

};

const beginRoundDrawing = () => {

  console.log('Begin round drawing');

  const currentState = 'drawing';
  const drawingsStartTimestamp = '';
  const pendingAction = 'continueRound';
  const awaitingHostActionTimer = (90 * 1000);
  const awaitingHostAction = true;

  // set currentRound state to drawing
  // set drawingsStartTimestamp
  // HOST - start 90 second timer
  // HOST - call continueGame

};

const continueRound = () => {

  const currentState = 'drawing';
  if (currentState === 'drawing') {
    beginRoundVoting();
  } else if (currentState === 'voting') {
    nextRound();
  } else {
    console.error(`Invalid Current Round State: ${currentState}`);
  }

  // check round's current state
  // if round is in drawing state
  // call beginRoundVoting
  // else if round is in voting state
  // call nextRound

};

const beginRoundVoting = () => {

  console.log('Begin round voting');

  const currentState = 'voting';
  guessOnEntry();

  // set currentRound state to voting
  // call guessOnEntry

};

const startNextEntry = () => {

  console.log('Start next entry');

  const entry = false;

  if (!entry) {
    continueRound();
  } else {
    guessOnEntry();
  }

  // get next incomplete entry
  // if none call continueRound
  // else
  // call guessOnEntry

};

const guessOnEntry = () => {

  console.log('Guess on entry');

  const votingStartTimestamp = '';
  const pendingAction = 'guessesSubmitted';
  const awaitingHostActionTimer = (60 * 1000);
  const awaitingHostAction = true;

  // set votingStartTimestamp
  // HOST - start 60 sec timer
  // HOST - call continueGame

};

const guessesSubmitted = () => {

  console.log('Guesses submitted');

  const guessesSubmitted = true;
  voteOnEntry();

  // set guessesSubmitted
  // call voteOnEntry

};

const voteOnEntry = () => {

  console.log('Vote on entry');

  const pendingAction = 'votesSubmitted';
  const awaitingHostActionTimer = (20 * 1000);
  const awaitingHostAction = true;

  // get current entry
  // start 20 sec timer
  // HOST - call continueGame

};

const votesSubmitted = () => {

  console.log('Votes submitted');

  const votesSubmitted = true;
  revealEntryResults();

};

const revealEntryResults = () => {

  console.log('Reveal entry results');

  const pendingAction = 'answerRevealed';
  const awaitingHostActionTimer = (60 * 1000);
  const awaitingHostAction = true;

  // get current entry
  // HOST - start 60 sec timer
  // HOST - call continueGame

};

const answerRevealed = () => {

  console.log('Answer revealed');

  const answerRevealed = true;
  startNextEntry();

};

exports.startGame = startGame;
exports.continueGame = continueGame;
