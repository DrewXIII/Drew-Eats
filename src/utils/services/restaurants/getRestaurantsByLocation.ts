import {yelpApi} from '../../apis/yelpApi';

export const getRestaurantsByLocation = async (location: string) => {
  const getRestaurantsUrl = 'businesses/search';

  try {
    const response = await yelpApi.get(getRestaurantsUrl, {params: {location}});
    return response.data;
  } catch (error) {
    return error;
  }
};
