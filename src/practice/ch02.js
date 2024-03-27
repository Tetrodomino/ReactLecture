let s = `He said, "I am unhappy"` // template literal

console.log(s);

let year = new Date().getFullYear(); // 현재 날짜의 현재 년도
console.log(`올해는 ${year}년`);

let toggle = true;
for (let i = 0; i < 4; i++)
{
    toggle = !toggle; // true false 전환
    console.log(toggle);
}

console.log(`2 == '2' is ${2 == '2'}`); // true, 자료형이 달라도 값은 같다고 인식
console.log(`2 === '2' is ${2 === '2'}`); // false, 값과 자료형 중 하나가 다르면 false

