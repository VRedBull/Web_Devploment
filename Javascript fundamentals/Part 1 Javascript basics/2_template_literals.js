const name = "Vikas";
const age = 20;
const job = "Student";

let html;

//Inserting markup using javascript without using template literals (es5)
// html =
//   "<ul> <li> Name: " +
//   name +
//   "</li><li> Age: " +
//   age +
//   "</li><li> Job: " +
//   job +
//   "</li></ul>";

// html =
//   "<ul>" +
//   "<li>Name: " +
//   name +
//   "</li>" +
//   "<li>Age:" +
//   age +
//   "</li>" +
//   "<li>Job:" +
//   job +
//   "</li>" +
//   "</ul>";

// Inserting Markup using template literal
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Job: ${job}</li>
    <li>Age: ${age}</li>
  </ul>
  `;

document.body.innerHTML = html;
