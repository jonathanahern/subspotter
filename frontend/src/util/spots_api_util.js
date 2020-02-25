import axios from 'axios';

export const getAllSpots = () => {
  return axios.get(`/api/spots`)
};

export const getSpot = id => {
  return axios.get(`/api/spots/${id}`)
}

export const getUserSpots = id => {
  return axios.get(`/api/spots/user/${id}`)
};

export const postSpot = data => {
  return axios.post(`/api/spots`, data)
};