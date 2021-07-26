//usually we use let for variables inside a loop

//a normal for loop
// for (let i = 0; i < 5; i++) {
// console.log(i);
// }

//while loop
// let i = 0;
// while (i < 4) {
//   console.log(i);
//   i++;
// }

//do while loop, it'll execute atleast once
// let j = 0;
// do {
//   console.log(j);
//   j++;
// } while (j < 5);

//for each
// const cars = ["ford", "chevy", "tata", "benz"];

// cars.forEach(function (cars) {
//   console.log(cars);
// });

//Maps

// const user = [
//   { id: 1, name: "Vikas" },
//   { id: 2, name: "Vivaan" },
//   { id: 3, name: "Pradhan" },
// ];

// console.log(
//   user.map(function (user) {
//     return user.id;
//   })
// );

//For in loops to go through a object

const user = {
  name: "Vikas",
  id: 1,
  job: "Student",
};

for (x in user) {
  console.log(`${x}:${user[x]}`);
}
