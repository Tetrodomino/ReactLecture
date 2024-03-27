let date = new Date().getDate();
console.log(date);
console.log(`오늘의 날짜는 ${date % 2 == 0 ? '짝수' : '홀수'}`)

let test;
test = test ? test : '초기값'; // 빈 변수는 false로 취급돼서 초기값이 됨
console.log(test);