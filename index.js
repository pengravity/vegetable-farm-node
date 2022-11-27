const fs = require('fs');

const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');

const textOut = `Info about avocados: ${textIn}. \n Created on ${new Date(
  Date.now()
)}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log(textOut);
