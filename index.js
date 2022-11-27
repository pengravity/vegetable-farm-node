const fs = require('fs');
const http = require('http');
const url = require('url');

////////////////////////////////
//FILES
// // blocking, syncrhonous
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');

// const textOut = `Info about avocados: ${textIn}. \n Created on ${new Date(
//   Date.now()
// )}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// // console.log(textOut);

///////////////////////////////////////
// // non-blocking, async
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//   if (err) return console.log('error', err);
//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//     console.log(data2);
//     fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//       console.log(data3);

//       fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', (err) => {
//         console.log('file have been written');
//       });
//     });
//   });
// });

////////////////////////////////////////
// SERVER
const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === '/' || pathName === '/overview') {
    res.end('This is an overview');
  } else if (pathName === '/product') {
    res.end('This is the product');
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
    });
    res.end('<h1>404 page not found</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('server has been started on port 8000');
});
