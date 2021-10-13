console.log('logging....');
console.clear();

// log level
console.log('log');     // 개발
console.log('info');    // 정보
console.log('warn');    // 경보 
console.log('error');   // 에러, 사용자 에러, 시스템 에러

// assert -> 참이 아닌경우에만 출력
console.assert(2 === 3, 'not same');
console.assert(2 === 2, 'same');

// print object
const student = { name: 'wonbin', age: 28, company: { name: 'AC' } };
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, colors: false, depth: 0 });

// measuring time
console.time('for loop');
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd('for loop');

// counting
function a() {
  console.count('a function');
}
a();
console.countReset('a function')
a();

// trace -> 추적하는거 디버깅에 용이하다
function f1() {
  f2();
}

function f2() {
  f3();
}

function f3() {
  console.log('f3');
  console.trace();
}
f1();