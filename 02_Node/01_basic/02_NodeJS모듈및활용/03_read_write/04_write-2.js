const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');
const savaPath = path.join(__dirname, './text-1.txt');

const data = fs.readFileSync(filePath, 'utf-8');

if (fs.existsSync(savaPath)) {
  console.log('파일이 존재합니다.');
}

// 파일이 있으면
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  } else {
    // 없을땐 생성
    fs.writeFileSync(savaPath, data);
  }
});
