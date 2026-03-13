const path = require('path');

const ext = path.extname(__filename);
const parsedPath = path.parse(__filename);

console.log('파일 확장자: ', ext);
console.log(parsedPath);
