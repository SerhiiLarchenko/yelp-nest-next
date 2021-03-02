import axios from 'axios';
import { mainConfig } from '../../src/config';

export const axiosInstance = axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${mainConfig().yelp.key}`,
  },
});
