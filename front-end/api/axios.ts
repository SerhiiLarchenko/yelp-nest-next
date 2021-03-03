import axios from 'axios';

axios.defaults.baseURL = process.env.API_URL;
axios.defaults.headers.common['Content-Type'] = 'application/json';

export { axios };
