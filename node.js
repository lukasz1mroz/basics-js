// // Event loop

// const fs = require('fs');

// First, I/O queue pulls callbacks and executes in next loop after setImmediate
// fs.readFile(__filename, () => {
//   console.log('this is readFile 1');
// });

// process.nextTick(() => console.log('this is process.nextTick 1'));
// Promise.resolve().then(() => console.log('this is Promise.resolve 1'));
// setTimeout(() => console.log('this is setTimeout 1'), 0);

// // Ensure CPU is busy for > 1ms to enqueue setTimeout first
// for (let i = 0; i < 2000000000; i++) {}

// setImmediate(() => console.log('this is setImmediate 1'));

// // Node APIs

// const fsProm = require('node:fs/promises');
// const path = require('node:path');
// Add mjs extension or type module in package.json
//import fs from 'node:fs';

// const notes = './test.txt';

// // FS operations

// const example = async () => {
//   try {
//     const stats = await fsProm.stat('./test.txt')
//     console.log(stats.isFile());
//     console.log(stats.isDirectory());
//     console.log(stats.isSymbolicLink());
//     console.log(stats.size);
//   } catch(e) {
//     console.log(e)
//   }
// }

// example()

// fs.readFile(notes, (err, succ) => {
//   if(err) {
//     console.log(err)
//   }
//   console.log(succ)
// })

// fs.writeFile(notes, 'this is updated data', err => {
//   if(err) {
//     console.log(err)
//   }
// })

// console.log(fs.existsSync(notes));
// console.log(
//   fs.readdir(notes, (err, succ) => {
//     if (err) console.log(err);
//     console.log(succ);
//   }),
// );

// // Path operations

// console.log(path.dirname(notes), path.basename(notes), path.extname(notes))
// console.log(path.join('.', 'test.txt'))
// console.log(path.resolve(notes))

// // HTTP

// const http = require('node:http');

// http
//   .createServer((request, response) => {
//     const { headers, method, url } = request;
//     let body = [];
//     request
//       .on('error', (err) => {
//         console.error(err);
//       })
//       .on('data', (chunk) => {
//         body.push(chunk);
//       })
//       .on('end', () => {
//         body = Buffer.concat(body).toString();
//         response.on('error', (err) => {
//           console.error(err);
//         });
//         response.statusCode = 200;
//         response.setHeader('Content-Type', 'application/json');
//         const responseBody = { headers, method, url, body };
//         response.write(JSON.stringify(responseBody));
//         response.end();
//       });
//   })
//   .listen(8080);

// // Encryption

// const crypto = require('crypto');
// const algorithm = 'aes-256-cbc';
// const key = crypto.randomBytes(32);
// const iv = crypto.randomBytes(16);

// function encrypt(text) {
//   const cipher = crypto.createCipheriv(algorithm, key, iv);
//   let encrypted = cipher.update(text, 'utf8', 'hex');
//   encrypted += cipher.final('hex');
//   return encrypted;
// }

// function decrypt(encrypted) {
//   const decipher = crypto.createDecipheriv(algorithm, key, iv);
//   let decrypted = decipher.update(encrypted, 'hex', 'utf8');
//   decrypted += decipher.final('utf8');
//   return decrypted;
// }

// const text = 'Hello, World!';
// const encryptedText = encrypt(text);
// const decryptedText = decrypt(encryptedText);

// console.log('Encrypted:', encryptedText);
// console.log('Decrypted:', decryptedText);

// // Streams

// const fs = require('fs');
// const { Duplex, Transform } = require('stream');

// const file = fs.createWriteStream('./stream.txt');
// const readableStream = fs.createReadStream('./stream.txt', {
//   encoding: 'utf8',
// });

// for (let i = 0; i < 100; i++) {
//   file.write('this is line, ');
// }
// file.end();

// readableStream.on('data', (chunk) => console.log(chunk));
// readableStream.on('end', () => console.log('no more data'));

// readableStream.pipe(process.stdout);

// const duplexStream = new Duplex({
//   read(size) {
//     this.push('Hello, ');
//     this.push(null);
//   },
//   write(chunk, encoding, callback) {
//     console.log('Writing: ', chunk.toString());
//     callback();
//   },
// });

// duplexStream.on('data', (chunk) => {
//   console.log('Reading: ', chunk.toString());
// });

// duplexStream.write('node stream');
// duplexStream.end();

// const transformStream = new Transform({
//   transform(chunk, encoding, callback) {
//     this.push(chunk.toString().toUpperCase());
//     callback();
//   },
// });

// process.stdin.pipe(transformStream).pipe(process.stdout);
