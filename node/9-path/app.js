const path = require('path');

console.log('dirname: ', __dirname);
console.log('filename: ', __filename);

console.log(path.sep);
console.log(path.delimiter);

// basename
console.log('basename:', path.basename(__filename));
console.log('basename:', path.basename(__filename, '.js'));

// dirname
console.log('path.dirname:', path.dirname(__filename));

// extension -> 확장자명
console.log('path.extname:', path.extname(__filename));

//parse
const parsed = path.parse('parsed:', __filename)
console.log('parsed:', parsed);
parsed.root
parsed.name

const str = path.format(parsed)
console.log(str);

// isAbsolute
console.log('isAbsolute', path.isAbsolute(__dirname));
console.log('isAbsolute', path.isAbsolute('../'));

// normalize
console.log(path.normalize('./folder\\\\sub'));  // folder\sub 

// join
console.log(__dirname + path.sep + 'image');
console.log(path.join(__dirname, 'image'));