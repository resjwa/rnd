let a = 10;
const theInputBox = document.getElementById('asdf');

function incrementA() {
  a++;
  theInputBox.value = a;
}

function test() {
  console.log(a);
}

function resetA() {
  theInputBox.value = 0;
}
