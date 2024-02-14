import axios from 'axios';

const carInstance = axios.create({
  baseURL: 'https://65c7cfcee7c384aada6efccd.mockapi.io/',
});

export const allCar = async (page = 1, limit = 12) => {
  const { data } = await carInstance.get(`car-info?p=${page}&l=${limit}`);

  return data;
};
