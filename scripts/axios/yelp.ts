import { axiosInstance } from './axios-instance';

export const getBusinesses = (reqParams) =>
  axiosInstance.get('/search', reqParams).then(({ data }) => data.businesses);

export const getBusinessDetails = (id: string) =>
  axiosInstance.get(`/${id}`).then(({ data }) => data);

export const getBusinessReviews = (id: string) =>
  axiosInstance.get(`/${id}/reviews`).then(({ data }) => data.reviews);
