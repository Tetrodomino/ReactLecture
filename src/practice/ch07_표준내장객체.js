let str = 'c://Temps/ss/profile/james.jpg';

// 파일의 타입
let idx = str.lastIndexOf('.');
console.log(str.substring(idx + 1));

// 파일이 있는 제일 마지막 디렉토리명
let arr = str.split('/');
console.log(arr[arr.length - 2]);


const fruits = ['apple', 'banana', 'cherry'];
fruits.push('melon');
console.log(fruits.join(', ')); // , 을 사용하여 배열을 하나의 문자열로 합치기


const numbers = [4, 7, 10, 9, 15, 6];
console.log(numbers.sort((x, y) => x  - y) ); //오름차순 정렬


// forEach : 배열 내 요소에 대해 각각 실행
fruits.forEach(x => {
    console.log(x);
});

// 인수를 두 개 넣으면 두 번째는 index(현재 순번) 이 됨
fruits.forEach((x, index ) => {
    console.log(x, index);
});


// map : 각각의 인수에 대해 함수 실행
let power = numbers.map(val => val * val);
console.log(power);

let even = numbers.filter(val => val % 2 == 0 ); // 2로 나누어 떨어져서 0인 것만 남기기
console.log(even);

// 글자수 5개 초과인 것만 남기기
let len = fruits.filter(val => val.length > 5);
console.log(len);

// 배열의 총합
let sum = numbers.reduce((prev, curr) => prev + curr, 0);
console.log(sum);
console.log(numbers.reduce((prev, curr) => prev * curr, 1));



const complex = [
    {name: 'pad', price: 150000},
    {name: 'mouse', price: 80000},
    {name: 'pen', price: 30000}
];
const jsonComplex = JSON.stringify(complex); // 문자열로 전달
console.log(jsonComplex);

const parseComplex = JSON.parse(jsonComplex); // 다시 배열로 전달
console.log(parseComplex);