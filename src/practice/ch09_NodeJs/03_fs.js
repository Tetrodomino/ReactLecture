const fs = require('fs');

// 파일 읽기
// const file01 = fs.readFileSync('./01_전역변수.js');
// console.log(file01.toString());
// console.log('================================');
// const file02 = fs.readFileSync('./02_os.js');
// console.log(file02.toString());
// console.log('================================');

// console.log('================================');

// 비동기식으로 읽기 - 비정식 방식
// fs.readFile('./01_전역변수.js', (err, data) => {
//     console.log(data.toString());
// });

console.log('================================');
// 올바른 비동기식 읽기
fs.readFile('./01_전역변수.js', (err, data) => {
    console.log(data.toString());
    fs.readFile('./02_os.js', (err, data) => {
        console.log(data.toString())
    });
})