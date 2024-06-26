import CONFIG from './config';

const API_ENDPOINT = {
  CULTURE: `${CONFIG.BASE_URL}/cultures`,
  TOURS: `${CONFIG.BASE_URL}/tours`,
  DETAILCULTURE: (id) => `${CONFIG.BASE_URL}/cultures/${id}`,
  DETAILTOUR: (id) => `${CONFIG.BASE_URL}/tours/${id}`,
};

export default API_ENDPOINT;
