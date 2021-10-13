const fs = require('fs')

const data = []
fs.createReadStream('./file.txt', {
  // 한번에 얼마나 많은 데이터를 읽어오는지, 스트림이 한번에 처리 할 수 있는 내용
   highWaterMark :8, // default 64 kbytes
  // encoding: 'utf-8'
}).once('data', chunk => {
  // console.log(chunk)
  data.push(chunk)
  console.count('data')
}).on('end', () => {
  console.log(data.join(''));
}).on('error', error => {
  console.log(error)
})