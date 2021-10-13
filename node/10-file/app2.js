const fs = require('fs').promises;

// reading a file
fs.readFile('./text.txt', 'utf8') //
  .then(data => console.log(data))
  .catch(console.error)

  // writing a file
  fs.writeFile('./file.txt', 'Hello, Dream coders! ')
    .catch(console.error);

  fs.appendFile('./file.txt', 'Yo, Dream coders! ') // 비동기니까  copy안에 들어감 순서가 중요하 다면 안에 넣기
    .catch(console.error);

    // copy
  fs.copyFile('./file.txt', './file2.txt')
  .catch(console.error)


  // folder
  fs.mkdir('sub-folder')
    .catch(console.error)

    fs.readdir('./')
    .then(console.log)
    .catch(console.error)