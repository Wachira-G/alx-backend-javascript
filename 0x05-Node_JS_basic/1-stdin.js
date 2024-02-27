#!/usr/bin/node

const readline = require('readline');

// interface for reading input from user
const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const isPipedInput = !process.stdin.isTTY;

console.log('Welcome to Holberton School, what is your name?');

read.on('line', (input) => {
  console.log('Your name is:', input);
  if (isPipedInput) {
    console.log('This important software is now closing');
    read.close();
  }
});

read.on('close', () => {
  process.exit(0);
});
