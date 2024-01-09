import { onSubmit } from './app.js';

const input = document.querySelector('#url-input');
const formMessageNode = document.querySelector('.feedback');
const form = document.querySelector('form');

export const subscribe = () => {
  form.addEventListener('submit', onSubmit);
};

export const render = (path, newValue) => {
  switch (path) {
    case 'form.isError':
      if (newValue) {
        input.classList.add('is-invalid');
        formMessageNode.classList.remove('text-success');
        formMessageNode.classList.add('text-danger');
      } else if (!newValue) {
        input.classList.remove('is-invalid');
        formMessageNode.classList.remove('text-danger');
        formMessageNode.classList.add('text-success');
        form.reset();
      }
      break;
    case 'form.message':
      formMessageNode.innerHTML = newValue;
      break;
  }
};
