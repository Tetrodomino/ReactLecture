// Destructuring
const person = {name: 'James', age: 25, job: 'programmer'};
const {name, age} = person;
console.log(name, age);

//person = {name, age, job: 'Traveller'};
console.log(person);

let fruits = ['apple', 'banana', 'cherry'];
const [a, b, c] = fruits;
console.log(fruits);
const [x, y] = fruits;
console.log(x, y); // apple, banana


// Rest Operator
const [l, ...m] = fruits;
console.log(l, m); // l은 첫 번째, m은 첫 번째를 제외한 나머지를 배열로 리턴

let newFruits = [ ...fruits, 'melon']
console.log(newFruits); // fruits의 배열에 melon이 추가된 상태

let str = 'Java';
console.log(...str); // J a v a 처럼 글자 하나하나 분리

let newPerson = {...person, gender:'male'};
console.log(newPerson);