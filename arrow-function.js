// // regular function

// function add(num1, num2){
//     const addNums = num1 + num2;
//     return addNums;
// }

// const adds = add(20, 34);
// console.log(adds);


// function add(num1, num2){
//     const addNums = num1 + num2;
//     return addNums;
// }

// const adding = add();
// console.log(adding);

// // Expression function

// const myFunction = function(num1, num2){
//     return num1 * num2;
// }

// const multNums = myFunction(4, 5);
// console.log(multNums);

// // arrow function !

// const moldNums = (num1, num2) =>  (num1 % num2);

// const result = moldNums(5, 3);
// console.log(result);

// const totalMoney = (num1, num2, num3, num4) => (num1 + num2 + num3 + num4);

// const result = totalMoney(8,9,10,12);
// console.log(result);

// Single perameter 
const person = (person) => person.from.thana = "joshor thana";

const personAge = {
    name: "kabil",
    age: 55,
    from: {
        location: 'Cumilla',
        thana: 'cumilla thana'
    }
}

const getAge = person(personAge);
// console.log(getAge);


// using arrow function with array and change the value !

// const arrayOfNum = array => array[4];
// const array = arrayOfNum([23, 43, 54, 22, 66]);
// console.log(array);

// const arrayOfNum = array => array[2];
// const array = arrayOfNum([23, 43, 54, 22, 66]);
// console.log(array);


// do some math with arrow function, Multileval arrow function !

// const CalculationArrowFuntion = (num1, num2, num3, num4) => {
//     const add = num1 + num2 + num3 + num4;
//     console.log(add);
//     const mult = num1 * num4;
//     console.log(mult);
//     const result = add + mult;
//     return result;
// }

// const passValue = CalculationArrowFuntion(5, 10, 15, 20);
// console.log(passValue);

const arrayFuntion = (array) => array[2];
const passArray = arrayFuntion([23, 55, 44, 88, 19]);
// console.log(passArray);

// Using arrow function in object and also change the object value !

// const myObjectFuntion = obj => obj.fname = "kolim";
const myObjectFuntion = obj => obj;

const personInfo = {
    fname: 'jaker',
    lname: 'ullha',
    age: 28,
    address:{
        from: "nowakhali",
        thana: "bikromput",
        postCode: 323234
    }
}

const obj = myObjectFuntion(personInfo);
console.log(obj);

const showIdentity = `
   hi my first name is ${personInfo.fname}, and last name is ${personInfo.lname}, full name is ${personInfo.fname} ${personInfo.lname}
   and my age is ${personInfo.age}. i am form ${personInfo.address.from} and tha is ${personInfo.address.thana} thana
   our address postCode is ${personInfo.address.postCode};
`
// console.log(showIdentity);