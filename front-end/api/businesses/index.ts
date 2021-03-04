import { axios } from '../axios';
import { Business, ExtendedBusiness } from './types';

const getAllBusinesses = () =>
  axios.get<Business[]>('/business/all').then(({ data }) => data);

const getBusiness = (id: string | string[] | undefined) =>
  axios.get<ExtendedBusiness>(`/business/${id}`).then(({ data }) => data);

export { getAllBusinesses, getBusiness };
