const foo = ["one", "two", "three"];

//  console.log(foo[0]);

//  const [one, two, three] = foo

//  console.log(two);

const [red, green, blue, yellow] = foo;

//  console.log(yellow);

let a, b;
[a = 5, b = 6] = ["one"];

// console.log(b);

const colors = ["red", "green", "blue", "yellow", "orange"];

const [color1, color2, ...color3] = colors;

// console.log(color1);
// console.log(color2);
// console.log(color3);

const person = {
  firstName: "peter",
  lastName: "akagha",
  age: 36,
  fullName: function () {
    console.log(
      `my full name is ${this.firstName} ${this.lastName} and I am ${this.age}`
    );
  },
};

// person.fullName();

const { firstName, lastName, age, fullName } = person;

console.log(firstName);
console.log(lastName);
console.log(age);
person.fullName();
