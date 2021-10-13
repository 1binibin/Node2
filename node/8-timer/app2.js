console.log('code1');
console.time('timeout 0')
setTimeout(() => {  // 2
  console.timeEnd('timeout 0')
  console.log('setTimeout 0');
}, 0);

// for(let i=0; i< 1000; i++) {}

console.log('code2');
setImmediate(() => {  // 3
  console.log('setImmediate');
});

console.log('code3');
process.nextTick(() => {  // 1
  console.log('process.nextTick');
})