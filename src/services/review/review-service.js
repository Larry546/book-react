import {REACT_APP_API_RUL, api} from "../config";

const REVIEW_API_URL = `${REACT_APP_API_RUL}/review`;

export const createReview = async (review) => {
  const response = await api.post(`${REVIEW_API_URL}/createReview`, review);
  return response.data;
}

export const getReviewByBook = async (isbn) => {
  const response = await api.get(`${REVIEW_API_URL}/getReviewsByBook/${isbn}`);
  return response.data;
}