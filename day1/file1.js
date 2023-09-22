const os = require('os');
const path = require('path');
const { add, sub, multiply, div } = require('./file2');
//console.log(os);
const user = os.userInfo;
console.log(user);
console.log(`The system uptime is ${os.uptime()} seconds`);
const current = {
  name: os.type(),
  release: os.release(),
  memory: os.totalmem(),
  freespace: os.freemem(),
};
console.log(current);
console.log(os.type());
console.log(os.version());
console.log(os.homedir());
console.log(__dirname);
console.log(__filename);
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.extname(__dirname));
console.log(path.parse(__filename));
console.log(add(1, 2));
console.log(sub(2, 1));
console.log(multiply(8, 2));
console.log(div(3, 6));
