const fs = require('fs');
const first =fs.readFileSync('./contain/subfolder/first.txt', 'utf8')

const second = fs.readFileSync('./contain/subfolder/second.txt', 'utf8')

console.log(first, second);
fs.writeFileSync('./contain/subfolder/bonjour.txt', 'comment allez vous aujourd', 'utf8')