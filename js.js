const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const locatonInput = document.getElementById('location');
const summary = document.getElementById('userSummary');
let user = {};

function createUser() {
  user.name = nameInput.value;
  user.age = ageInput.value;
  user.location = locatonInput.value;
  const userText = `${user.name} is ${user.age} years old and lives in ${user.location}`;

  summary.innerText = userText;
}
