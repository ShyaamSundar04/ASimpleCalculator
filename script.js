function appendToDisplay(value) {
  const display = document.getElementById('display');
  display.textContent += value;
}

function clearDisplay() {
  document.getElementById('display').textContent = '';
}

function deleteLastDigit() {
  const display = document.getElementById('display');
  display.textContent = display.textContent.slice(0, -1);
}

function calculate() {
  const display = document.getElementById('display');
  try {
      display.textContent = eval(display.textContent);
  } catch (error) {
      display.textContent = 'Error';
  }
}
