//function with default parameters, i.e. if nothing is passed then the default parameters will work
function greet(firstName = "Vivaan", lastName = "Pradhan") {
  console.log(`Hello, ${firstName} ${lastName}`);
}

// greet();

//function expression

const square = function (x = 1) {
  return x * x;
};

console.log(square(2));

// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
const hello = (function (name) {
  console.log(`Hello!! ${name}`);
})("vikas");

//Property methods
const todo = {
  add: function () {
    console.log(`Add here`);
  },
  edit: function () {
    console.log(`Edit here`);
  },
};

todo.add();

//defining function of the object outside of the object
todo.delete = function () {
  console.log(`Delete here`);
};

todo.delete();
