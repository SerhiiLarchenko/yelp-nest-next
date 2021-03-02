import { axios } from '../axios';
import { Restaurant } from './types';

const getRestaurants = () =>
  axios.get<Restaurant[]>('https://jsonplaceholder.typicode.com/posts');

export { getRestaurants };
