let fruits = ['사과', '배', '감'];

for (let i = 0; i < fruits.length; i++)
    console.log(fruits[i]);


for (let fruit of fruits) // fruits 안의 요소를 하나씩 사용
    console.log(fruit);

var x = 4;
var x = 6;      // var는 재선언 가능
let y = 4;
// let y = 6;   // let은 재선언 불가능