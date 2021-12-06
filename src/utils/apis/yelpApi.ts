import axios from 'axios';
import {REACT_APP_YELP_BASE_URL, REACT_APP_YELP_API_KEY} from '@env';

export const yelpApi = axios.create({
  baseURL: `${REACT_APP_YELP_BASE_URL}`,
  headers: {
    Authorization: `Bearer ${REACT_APP_YELP_API_KEY}`,
  },
});
