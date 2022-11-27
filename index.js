const fs = require('fs');

// // blocking, syncrhonous
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');

// const textOut = `Info about avocados: ${textIn}. \n Created on ${new Date(
//   Date.now()
// )}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// // console.log(textOut);

// non-blocking, async
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
  fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
    console.log(data2);
    fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
      console.log(data3);

      fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', (err) => {
        console.log('file have been written');
      });
    });
  });
});
