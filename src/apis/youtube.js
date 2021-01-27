import axios from 'axios';

const KEY = 'AIzaSyBNFkfQPJ8x0f3Kk8IrBH6jy-2E6DLFEHk';

export default axios.create({
  baseURL: 'GET https://www.googleapis.com/youtube/v3',
});