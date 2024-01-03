import * as Yup from 'yup';
import onChange from 'on-change';

const state = {
  value: '',
};

const isValidate = (url) => {
  const schema = Yup.object().shape({
    url: Yup.string()
      .matches(/^(http|https):\/\/[^ "]+$/)
      .required(),
  });

  schema
    .validate({ url: `${url}` })
    .then((valid) => console.log(valid))
    .catch((error) => console.log(error));
};

watchedState = onChange(state, (path, value, previousValue) => {});

export default () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const inputValue = input.value;
    isValidate(inputValue);
  });
};
