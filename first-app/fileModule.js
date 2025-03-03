const fs = require('fs');

const files = fs.readdirSync('./');
console.log(files);

fs.readdir('./', (error, files) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Results ' + files);
  }
});