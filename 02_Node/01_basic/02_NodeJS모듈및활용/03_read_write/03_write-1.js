const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');
const savaPath = path.join(__dirname, './text-1.txt');

const data = fs.readFileSync(filePath, 'utf-8');

fs.writeFileSync('./text-1.txt', data, 'utf-8');
fs.writeFileSync('savaPath', data, 'utf-8');
