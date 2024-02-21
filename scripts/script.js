'use strict';

const firstPlayer = document.querySelector('.player--0');
const secondPlayer = document.querySelector('.player--1');

let firstPlayerScore = document.querySelector('#score--0');
let secondPlayerScore = document.querySelector('#score--1');

let firstPlayerCurrentScore = document.querySelector('#current--0');
let secondPlayerCurrentScore = document.querySelector('#current--1');

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

let dice = document.querySelector('.dice');

dice.classList.add('hidden');

let initialScore = 0;

let getRandomNum = () => {
  return Math.floor(Math.random() * 6) + 1;
};

firstPlayerScore.textContent = initialScore;
secondPlayerScore.textContent = initialScore;

btnRoll.addEventListener('click', function () {
  dice.classList.remove('hidden');

  if (firstPlayer.classList.contains('player--active')) {
    let addNum = getRandomNum();

    dice.setAttribute('src', `./images/dice-${addNum}.png`);

    if (addNum !== 1) {
      firstPlayerScore.textContent =
        Number(firstPlayerScore.textContent) + addNum;

      if (firstPlayerScore.textContent >= 100) {
        firstPlayer.classList.add('player--winner');

        btnRoll.disabled = true;
        btnHold.disabled = true;
      }
    } else {
      firstPlayerScore.textContent = Number(initialScore);

      if (firstPlayer.classList.contains('player--active')) {
        firstPlayer.classList.remove('player--active');
        secondPlayer.classList.add('player--active');
      }
    }
  } else {
    let addNum = getRandomNum();
    dice.setAttribute('src', `./images/dice-${addNum}.png`);

    if (addNum !== 1) {
      secondPlayerScore.textContent =
        Number(secondPlayerScore.textContent) + addNum;

      if (secondPlayerScore.textContent >= 100) {
        secondPlayer.classList.add('player--winner');

        btnRoll.disabled = true;
        btnHold.disabled = true;
      }
    } else {
      secondPlayerScore.textContent = Number(initialScore);

      if (secondPlayer.classList.contains('player--active')) {
        secondPlayer.classList.remove('player--active');
        firstPlayer.classList.add('player--active');
      }
    }
  }
});

btnHold.addEventListener('click', function () {
  if (firstPlayer.classList.contains('player--active')) {
    firstPlayer.classList.remove('player--active');
    secondPlayer.classList.add('player--active');

    firstPlayerCurrentScore.textContent = firstPlayerScore.textContent;
  } else {
    firstPlayer.classList.add('player--active');
    secondPlayer.classList.remove('player--active');

    secondPlayerCurrentScore.textContent = secondPlayerScore.textContent;
  }
});

btnNew.addEventListener('click', function () {
  firstPlayerCurrentScore.textContent = initialScore;
  secondPlayerCurrentScore.textContent = initialScore;
  firstPlayerScore.textContent = initialScore;
  secondPlayerScore.textContent = initialScore;
  // dice.setAttribute('src', `dice-${addNum}.png`);
  dice.classList.add('hidden');

  btnRoll.disabled = false;
  btnHold.disabled = false;

  firstPlayer.classList.remove('player--winner');
  secondPlayer.classList.remove('player--winner');
});
