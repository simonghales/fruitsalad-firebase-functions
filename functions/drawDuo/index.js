const functions = require('firebase-functions');

const startGame = (sessionCode) => {

  console.log('Starting game');

  const currentState = 'playing';
  const totalRounds = 2;
  const pairs = {};
  const rounds = {};
  const game = {};
  nextRound();

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

const nextRound = () => {

  console.log('Calling next found');

  const round = false;

  if (!round) {
    showGameResults();
  } else {
    startRound();
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

  const currentState = 'completed';

  // set currentState => completed

};

const startRound = () => {

  const round = 'something';
  const currentRound = round;
  beginRoundDrawing();

  // set currentRound
  // call beginRoundDrawing

};

const beginRoundDrawing = () => {

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

  const currentState = 'voting';
  guessOnEntry();

  // set currentRound state to voting
  // call guessOnEntry

};

const startNextEntry = () => {

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

  const votingStartTimestamp = '';
  const pendingAction = 'guessesSubmitted';
  const awaitingHostActionTimer = (60 * 1000);
  const awaitingHostAction = true;

  // set votingStartTimestamp
  // HOST - start 60 sec timer
  // HOST - call continueGame

};

const guessesSubmitted = () => {

  const guessesSubmitted = true;
  voteOnEntry();

  // set guessesSubmitted
  // call voteOnEntry

};

const voteOnEntry = () => {

  const pendingAction = 'votesSubmitted';
  const awaitingHostActionTimer = (20 * 1000);
  const awaitingHostAction = true;

  // get current entry
  // start 20 sec timer
  // HOST - call continueGame

};

const votesSubmitted = () => {

  const votesSubmitted = true;
  revealEntryResults();

};

const revealEntryResults = () => {

  const pendingAction = 'answerRevealed';
  const awaitingHostActionTimer = (60 * 1000);
  const awaitingHostAction = true;

  // get current entry
  // HOST - start 60 sec timer
  // HOST - call continueGame

};

const answerRevealed = () => {

  const answerRevealed = true;
  startNextEntry();

};

exports.startGame = startGame;
