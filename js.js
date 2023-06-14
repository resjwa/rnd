let a = 10;
const theInputBox = document.getElementById('asdf');
theInputBox.value = a;

function incrementA() {
  a++;
  theInputBox.value = a;
}

function test() {
  console.log(a);
}

function resetA() {
  a = 0;
  theInputBox.value = a;
}
