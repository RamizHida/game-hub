import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'ad4a42422cd54ddc87250331113f166a',
  },
});
