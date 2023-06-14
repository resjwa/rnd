const calculations = document.getElementById('calculator');

function getCalculations(a, b, c) {
  const results = a + b + c;
  console.log(results);
  calculations.innerText = results;
}
