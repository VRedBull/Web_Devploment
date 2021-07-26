const person = {
  name: "Vikas",
  age: 20,
  Job: "Student",
  area: {
    city: "Ambarnath",
    state: "MH",
  },
  hobbies: ["video games", "web dev"],
  getBirthYear: function () {
    return 2021 - this.age;
  },
};

console.log(person.name);
console.log(person.age);
console.log(person.hobbies[1]);
console.log(person.area.city);
console.log(person.getBirthYear());
