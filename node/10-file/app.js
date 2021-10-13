const fs = require('fs')

// 3가지

// rename(...., callback(err, data) )
// try {renameSync(...) } catch(e) {}   
// promise.rename().then().catch()
try{
  fs.renameSync('./text.txt', './text-new.txt');
}
catch (error) {
  console.log(error);
}

fs.rename('./text-new.txt', './text.txt', (error) => { // 비동기
  console.log(error);
})

console.log('hello')

fs.promises
  .rename('./text2.txt', './text-new.txt')
  .then(() => {console.log('Done!')})
  .catch((console.error))

