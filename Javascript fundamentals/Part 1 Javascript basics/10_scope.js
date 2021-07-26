var a = 1;
let b = 2;
const c = 3;

// function change() {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log("Function Scope: ", a, b, c);
// }
// change();

if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
  console.log("If Scope: ", a, b, c);
}
console.log("Global Scope: ", a, b, c);

//It's just better to use let and const and not use var
