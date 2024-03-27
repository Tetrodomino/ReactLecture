
////////// 함수를 선언하는 2가지 방법 /////////
const fn = function() {
    console.log('익명 함수');
}

function named() {
    console.log('선언 함수');
}

fn();
named();


///////// 람다 함수 /////////
const arrow = () => {
    console.log('화살표 함수, 람다 함수');
}

arrow();


// 파라메터가 1개가 있으면 괄호 생략
const param1 = x => {
    console.log('x= '+ x);
}

param1('ㄱㄴㄷㄹ');


// 함수 내부 실행문이 return 1개밖에 없으면 {}와 return 생략 가능
const add = (a, b) => a + b;

console.log('4 + 5 = ' + add(4, 5));


const fn2 = (name, count) => {
    if (count == undefined) // count에 값을 집어넣지 않으면 실행됨
        count = 0;

    count = count || 0; // 위와 마찬가지로 count가 undefined가 되면 0이 대입됨

    console.log(`${name}: ${count}`);
}

fn2('apple', 10);
fn2('banana');


//////////// 매개변수에 함수 넣기 ///////////
function call3Times(callback) {
    for (let i = 0; i < 3; i++)
        callback(); // callback이 함수면 그걸 그대로 실행
}
call3Times(named);

//call3Times(3); 함수가 아니라서 에러 발생

call3Times(function() {
    console.log('함수 생성하여 콜백 실행');
}) // 내부에 함수를 직접 선언하는 것도 가능


///////////////////////////////////////////////////

// setTimeout 함수
setTimeout(() => {
    console.log('1000ms 이후에 실행');
}, 1000)

const si = setInterval(() => {
    console.log('0.5초마다 실행');
}, 500)

setTimeout(() => { // 3초 후에 반복 실행되는 si를 제거
    clearInterval(si);
}, 3000)