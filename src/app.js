import * as Yup from 'yup';
import onChange from 'on-change';
import { subscribe, render } from './view.js';

const state = {
  form: {
    isError: null,
    message: '',
  },
};

const validateUrl = async (url) => {
  try {
    await Yup.string().required().url().validate(url);
    return true;
  } catch {
    return false;
  }
};

const watchedState = onChange(state, render);

export const onSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  console.log(formData.get('url'));
  const url = formData.get('url');
  const isValid = await validateUrl(url);
  if (isValid) {
    watchedState.form.isError = false;
    watchedState.form.message = 'RSS успешно загружен';
    // отправляем запрос на url
  } else {
    watchedState.form.isError = true;
    watchedState.form.message = 'Ссылка должна быть валидным URL';
  }
};

export const app = () => {
  subscribe();
};
