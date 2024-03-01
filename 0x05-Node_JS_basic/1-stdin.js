#!/usr/bin/node

const readline = require('readline');

// interface for reading input from user
const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const isPipedInput = !process.stdin.isTTY;

process.stdout.write('Welcome to Holberton School, what is your name?\n');

read.on('line', (input) => {
  console.log('Your name is:', input);
  if (isPipedInput) {
    process.stdout.write('This important software is now closing\n');
    read.close();
  }
});

read.on('close', () => {
  process.exit(0);
});
