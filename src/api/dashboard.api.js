import api from './api.js'

export const getsinglish_data = () =>
  api.get(
    `/singlish_data`
  );
