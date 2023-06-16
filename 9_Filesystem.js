//Readfile

// const fs = require('fs');
// fs.readFile('file.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });


//Synchronous File System Operations

// const fs = require('fs');
// try {
//   const data = fs.readFileSync('file.txt', 'utf8');
//   console.log(data);
// } catch (err) {
//   console.error(err);
// }

//Asynchronous File System Operations

// const fs = require('fs');
//    fs.readFile('file.txt', 'utf8', (err, data) => {
//      if (err) {
//        console.error(err);
//      } else {
//        console.log(data);
//      }
//    });

//write file

//    const fs = require('fs');
//    const data = 'Hello, World!';
//    fs.writeFileSync('old.txt', data, 'utf8', (err) => {
//      if (err) {
//        console.error(err);
//      } else {
//        console.log('Data written to file');
//      }
//    });

//Append file

// const fs = require('fs');
//    const data = 'New data to appendd';
//    fs.appendFile('file.txt', data, 'utf8', (err) => {
//      if (err) {
//        console.error(err);
//      } else {
//        console.log('Data appended to file');
//      }
//    });

//Delete file

// const fs = require('fs');
// fs.unlink('file.txt', (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('File deleted');
//   }
// });

//  Rename file

// const fs = require('fs');
// fs.rename('old.txt', 'new.txt', (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('File renamed');
//   }
// });

//Create Directory

// const fs = require('fs');
// fs.mkdir('mydir', (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('Directory created');
//   }
// });

//Remove Directory

// const fs = require('fs');
// fs.rmdir('mydir', (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('Directory removed');
//   }
// });

//read directroy

// const fs = require('fs');
// fs.readdir('mydir', (err, files) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(files);
//   }
// });

//check/directroy

// const fs = require('fs');
// fs.exists('file.txt', (exists) => {
//   if (exists) {
//     console.log('File exists');
//   } else {
//     console.log('File does not exist');
//   }
// });

//file stats

// const fs = require('fs');
// fs.stat('file.txt', (err, stats) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(stats);
//   }
// });
