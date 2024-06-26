import { Notify } from 'notiflix/build/notiflix-notify-aio';

const btn = document.querySelector('.form');

function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
        const shouldResolve = Math.random() > 0.3;
        setTimeout(() => {
            if (shouldResolve) {
                resolve({ position, delay });
            } else {
                reject({ position, delay });
            }
        }, delay);
    });
}

function onClick(event) {
    event.preventDefault();
    const { delay, step, amount } = event.currentTarget.elements;
    let inputDelay = Number(delay.value);
    let inputStep = Number(step.value);
    let inputAmount = Number(amount.value);

    for (let i = 1; i <= inputAmount; i += 1) {
        inputDelay += inputStep;

        createPromise(i, inputDelay)
            .then(({ position, delay }) => {
                Notify.success(
                    `✅ Fulfilled promise ${position} in ${delay}ms`
                );
            })
            .catch(({ position, delay }) => {
                Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
            });
        event.currentTarget.reset();
    }
}

btn.addEventListener('click', onClick);
