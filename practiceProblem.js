// // 1. Write a arrwo functin will take 3 parameters, will multiply the paremeters and will return the result.

// const mult = (num1, num2, num3) =>{
//     const result =  num1 * num2 * num3;
//     return result;
// } 

// const multiply = mult(5, 10, 15);
// console.log(multiply);

// // 2. write the following sentence in three lines and print the result: I am a web developer, i love to code. i love to eat biryani;

// const sentence = `
//   I am a Web Developer,
//   I Love code.
//   I Love To eat Biryani
// `
// console.log(sentence);

// // 3. write an arrow function that will take 2 parameters: one parameter will come from you and the other parameter will be a default parameter add these two parameters and return the result

// const add = (num1, num2 = 0) => num1 + num2;
// const result = add(10);
// console.log(result);

// =========== Practice Problem 2 ============= //

// 1. write an arrow function where it will do the following:

// a) it will take an array where the array elements will be the name of your friends

// b) check it the length of each element is event, push elements with even length to a new array and return the result 

const freshArray = [];
const friends = (names) => {
    for(const name of names){
        const len = name.length;
        if(len % 2 === 0){
            // push event name
            freshArray.push(name);
            // push event name with event number
            freshArray.push(len, name);
        }
    }
    return freshArray;
}

const friendsName = ['abul', 'kabul', 'ahesan', 'shakil ahmed', 'babul hasan', 'sofiq ul'];
const friend = friends(friendsName);
console.log(freshArray);