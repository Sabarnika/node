//for large data file
const fs = require('fs');
const rs = fs.createReadStream('./lorem.txt', { encoding: 'utf-8' });
const ws = fs.createWriteStream('./new-lorem.txt');
// rs.on('data',(datachunk)=>
// {
//     ws.write(datachunk)
// })
//or in simple words
rs.pipe(ws);
