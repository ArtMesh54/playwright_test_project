

// function employeeAndCompany(employees) {
//     employees.forEach(employee => {
//       console.log(`Employee ${employee.name} works for ${employee.company}`);
//     });
// }

// function getTheSquare(arrayOfObjects) {    
//   arrayOfObjects.forEach(obj => {
//     obj.square = Math.sqrt(obj.source);
//   });

//   return arrayOfObjects;
// }

// let box = {
//   length: 20,
//   width: 30,
//   height: 15,
//   getVolume() {
//     return this.length * this.width * this.height;
//   }
// };

// const fruit = "apple";

// switch (fruit) {
//   case "orange":
//     console.log("$5");
//     console.log("per kg")
//     break;
//   case "apple":
//     console.log("$0.5");
//     console.log("for a piece")
//   default:
//     console.log("$2")
//     break;
// }

// let data = [5, -13, 3, 21, 0, 9]
// let count = 0;
// data.forEach(val => {
//   count += val;
// });

// let n = 1;
// while (n <= 10) {
//   if (n < 6) {
//     console.log("Tree!");
//   } else console.log("City!");
//   n++;
// }
let numbers = [1,2,3,4,5,6,0];

function checkEvenOrOdd(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) 
      break;
    if (numbers[i] % 2 == 0) {
      console.log("even");
    } else {
      console.log("odd");
    }
  }
}

checkEvenOrOdd(numbers);