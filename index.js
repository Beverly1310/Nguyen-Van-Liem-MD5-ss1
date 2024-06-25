// const sum = (arr) => {
//   let total = 0;
//   arr.forEach((number) => (total += number));
//   return total;
// };
// let arr = [1, 2, 3, 4, 5, 6, 10];
// let arr2 = ["one", "two", "three", "four", "five", "six"];
// let employees = [
//   {
//     name: "Alice",
//     salary: 1000,
//   },
//   {
//     name: "Giang",
//     salary: 100,
//   },
//   {
//     name: "Đạo",
//     salary: 90,
//   },
//   {
//     name: "Liêm",
//     salary: 110,
//   },
// ];
// console.log(sum(arr));

// const calculateSum = (arr) => {
//   return arr.reduce((a, b) => a + b, 0);
// };
// console.log(calculateSum(arr));

// const stringLengths = (arr) => {
//   return arr.map((string) => string.length);
// };
// console.log(stringLengths(arr2));

// const findFirstEvent = (arr) => {
//   return arr.find((number) => number % 2 === 0);
// };
// console.log(findFirstEvent(arr));

// const filterEvenNumbers = (arr) => {
//   return arr.filter((number) => number % 2 === 0);
// };
// console.log(filterEvenNumbers(arr));

// const findLargestNumber = (arr) => {
//   return arr.reduce((a, b) => Math.max(a, b));
// };
// console.log(findLargestNumber(arr));

// const checkIfElementExists = (arr, value) => {
//   return arr.includes(value);
// };
// console.log(checkIfElementExists(arr, 2));

// const calculateSumOfPrimes = (arr) => {
//   return arr
//     .filter((number) => {
//       if (number >= 2) {
//         for (let i = 2; i < Math.sqrt(number); i++) {
//           if (number % i === 0) {
//             return false;
//           }
//         }
//         return true;
//       } else{
//         return false;
//       }
      
//     })
//     .reduce((a, b) => a + b, 0);
// };

// console.log(calculateSumOfPrimes([1, 2, 3, 9]));

// const calculateTotalSalary = (arr) => {
//   return arr.map((e) => e.salary).reduce((a, b) => a + b, 0);
// };

// console.log(calculateTotalSalary([]));

// const squareNumbers = (arr) => {
//   return arr.map((e) => Math.pow(e, 2));
// };
// console.log(squareNumbers([1, 2, 3]));

// let a = "123"
// var master = [12, 44, 22, 66, 222, 777, 22, 22, 22, 6, 77, 3]; 

// var sub = [777, 22, 22]; 


// if(master.arrayContains(sub) > -1){
//     console.log("mang con");
// }
let arr = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

let result = [];

for (let i = 0; i < arr.length; i++) {
  let subResult = arr.filter((item) => item.split('').sort().join('') === arr[i].split('').sort().join(''));
  console.log(subResult);
  let isExist = false;
  for (let j = 0; j < result.length; j++) {
    console.log(subResult.join('') === result[j].join(''));
    if (subResult.join('') === result[j].join('')) {
      isExist = true;
      break;
    }
  }
  if (!isExist) {
    result.push(subResult);
  }
}

console.log(result);

