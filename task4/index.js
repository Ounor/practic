JavaScript для счетчика
JavaScript
const counterEl = document.querySelector('.result');
const plusBtnEl = document.querySelector('.plus');
const minusBtnEl = document.querySelector('.minus');
const messageEl = document.querySelector('.message');

let count = 0;

function updateCounter() {
  counterEl.textContent = count;
  updateColor();
  updateButtons();
  updateMessage();
}

function updateColor() {
  if (count > 0) {
    counterEl.style.backgroundColor = '#fffacd';
  } else if (count < 0) {
    counterEl.style.backgroundColor = '#98fb98';
  } else {
    counterEl.style.backgroundColor = '#ff6347';
  }
}

function updateButtons() {
  if (count === 10) {
    plusBtnEl.disabled = true;
  } else if (count === -10) {
    minusBtnEl.disabled = true;
  } else {
    plusBtnEl.disabled = false;
    minusBtnEl.disabled = false;
  }
}

function updateMessage() {
  if (count === 10 || count === -10) {
    messageEl.style.display = 'block';
    if (count === 10) {
      messageEl.textContent = 'Вы достигли максимального значения!';
    } else {
      messageEl.textContent = 'Вы достигли минимального значения!';
    }
  } else {
    messageEl.style.display = 'none';
  }
}

plusBtnEl.addEventListener('click', () => {
  count++;
  updateCounter();
});

minusBtnEl.addEventListener('click', () => {
  count--;
  updateCounter();
});
