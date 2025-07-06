const display = document.getElementById('display');

function appendNumber(num) {
  display.value += num;
}

function appendOperator(op) {
  if (display.value === '') return;
  const lastChar = display.value.slice(-1);
  if (['+', '-', '*', '/'].includes(lastChar)) {
    display.value = display.value.slice(0, -1);
  }
  display.value += op;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

document.addEventListener('keydown', (e) => {
  const key = e.key;
  if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
    appendNumber(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key.toLowerCase() === 'c') {
    clearDisplay();
  }
});
