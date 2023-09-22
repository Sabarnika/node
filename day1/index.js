const fsPromises = require('fs').promises;
const path = require('path');
const fileOp = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, 'txt1.txt'),
      'utf-8'
    );
    console.log(data);
    await fsPromises.unlink(path.join(__dirname, 'txt1.txt'));
    await fsPromises.writeFile(path.join(__dirname, 'newfile.txt'), data);
    await fsPromises.appendFile(
      path.join(__dirname, 'newfile.txt'),
      '\n\nHello I am added'
    );
    await fsPromises.rename(
      path.join(__dirname, 'newfile.txt'),
      path.join(__dirname, 'new_renamed_file.txt')
    );
    const newData = await fsPromises.readFile(
      path.join(__dirname, 'new_renamed_file.txt'),
      'utf-8'
    );
    console.log(newData);
  } catch (err) {
    console.log(err);
  }
};
fileOp();
