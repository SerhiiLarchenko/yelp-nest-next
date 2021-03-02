import { axios } from '../axios';
import { Business } from './types';

const getAllBusinesses = () =>
  axios.get<Business[]>('/business/all').then(({ data }) => data);

// const getBusiness = (id: string) =>
//   axios.get<Business>(`/business/${id}`).then(({ data }) => data);

export { getAllBusinesses };
