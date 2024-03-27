const os = require('os');
const url = require('url');

console.log(os.hostname(), os.platform(), os.type());

console.log(url.parse('https://www.naver.com/'))