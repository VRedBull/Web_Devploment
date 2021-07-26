let numbers = [11, 2, 44, 6, 33];

//have to use a compare function, as the sort() function will only see the 1st letter of the element and use
// it to sort it
numbers.sort((a, b) => a - b);
console.log(numbers);

numbers.push(20);
console.log(numbers);

numbers.pop();
console.log(numbers);

//removes element from the 1st index
numbers.shift();
console.log(numbers);

//adds element to the 1st index
numbers.unshift(44);
console.log(numbers);

//removes the n number of elements from the a starting position
numbers.splice(2, 3);
console.log(numbers);
