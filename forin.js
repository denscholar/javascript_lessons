const person = {
  firstName: "peter",
  lastName: "akagha",
  age: 36,
};

//   for (const key in person) {
//     console.log(key, person[key]);
//     console.log(person[key]);

//   }

// person.forEach(element => {
//     console.log(element);

// })

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

function adder(number) {
  sum += number;
}

numbers.forEach(adder);


console.log(sum);
