const path = require('path');
// import path from 'path';
// import { fileURLToPath } from 'url';

// esm: __filename -> 사용불가

// const dir = fileURLToPath(import.meta.url);
// console.log(dir);

// const fullPath = path.join('some', 'work', 'ex.txt');
// console.log(fullPath);

console.log('파일 절대 경로: ', __filename);

// 절대경로: 루트 디렉토리부터 시작하는 경로
// 상대경로: 현재 작업 디렉토리 기준 경로

const dir = path.dirname(__filename);
console.log('경로만: ', dir);

// 현재 작업 디렉토리
// console.log(process.cwd());
