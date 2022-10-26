import Notiflix from 'notiflix';

const getEl = selector => document.querySelector(selector);

getEl('form').addEventListener('submit', onSubmitBtn);

function onSubmitBtn(event) {
  event.preventDefault();

  let delay = +getEl('[name=delay]').value;
  let step = +getEl('[name=step]').value;
  let amount = +getEl('[name=amount]').value;

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay)
  })
}

