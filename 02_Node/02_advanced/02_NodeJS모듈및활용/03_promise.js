const fs = require('fs').promises;
// const fs = require('fs/promises');

// fs.readdir('./')
//   .then((files) => {
//     console.log(files);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

async function readdir() {
  try {
    const files = await fs.readdir('./');
    console.log(files);
  } catch (err) {
    console.log(err);
  }
}
