const fs = require('fs');
if (!fs.existsSync('./new')) {
  fs.mkdir('./new', (err) => {
    if (err) throw err;
    console.log('Directory Created');
    fs.rmdir('./new', (err) => {
      if (err) throw err;
      console.log('Directory Removed');
    });
  });
} else {
  fs.rmdir('./new', (err) => {
    if (err) throw err;
    console.log('Directory Removed');
  });
}
