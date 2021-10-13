// Fixed-size chunk of memory -> 고정된 사이즈의 메모리 덩어리
// array of integers, byte of data -> 숫자의 배열, 데이터에있는 바이트

const fs = require('fs')

const buf = Buffer.from('Hi');
console.log(buf);
console.log(buf.length);
console.log(buf[0]);
console.log(buf[1]);
console.log(buf.toString()); // -> 인코딩, default: utf-8

// create

const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2); // 빠름 -> 데이터가 있을수도 있으니 항상 초기화를 해주고
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3)
console.log(buf2.toString());
console.log(buf3.toString());

// buffer -> 문자열, 숫자가 될수도있고 메모리에 있는 바이트 단위로 나올수 있음

// concat
const newBuf = Buffer.concat([buf, buf2, buf3])
console.log(newBuf.toString());