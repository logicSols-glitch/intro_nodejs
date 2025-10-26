

const fs = require('fs');
const maths = require('./maths');
// const chalk = require('chalk');
const express = require('express');
const app = express();

// use it to read files
fs.readFile('example.txt', 'utf8', (err, data) =>{
    if (err) console.log (err);
    else {
        console.log(data);
    }
});

// use local module
console.log(maths.add(10, 5));
console.log(maths.multiply(10, 5));

// Testing third party module chalk
// console.log(chalk.blue('Hello from chalk'));
// console.log(chalk.green.bold('Modules make Node.js poweroff'));

// Testing third party module express
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start the server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});