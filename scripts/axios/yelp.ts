import { axiosInstance } from './axios-instance';

export const getBusinesses = (reqParams) =>
  axiosInstance.get('/search', reqParams).then((res) => res.data.businesses);

export const getBusinessDetails = (id: string) =>
  axiosInstance.get(`/${id}`).then((res) => res.data);

export const getBusinessReviews = (id: string) =>
  axiosInstance.get(`/${id}/reviews`).then((res) => res.data.reviews);
