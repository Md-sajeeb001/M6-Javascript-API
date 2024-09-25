// const numbers = [32, 44, 12, 55, 45, 89];

// const maxNam = Math.max(numbers);
// console.log(maxNam);

// const numbers2 = [32, 44, 12, 55, 45, 89];

// console.log(numbers2);
// const maxNam2 = Math.max(...numbers2);
// console.log(maxNam2);


// using spreed operator and 
// const numbers = [32, 44, 12, 55, 45, 89];

// // const number = Math.min(...numbers);
// const number = numbers;
// console.log(number)
// number.push(11, 111);

// let changeValue = number;
// changeValue = [88, 77, 66, 55];
// console.log(...changeValue);

const arrayOfNumber = [55, 88, 102, 45, 76];
const maxNum = Math.max(...arrayOfNumber);

// Advanced 
const addNum = [...arrayOfNumber, 500, 600];
console.log(maxNum);
console.log(...addNum);