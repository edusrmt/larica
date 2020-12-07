import Axios from 'axios';

const Api = Axios.create({
  baseURL: 'http://www.recipepuppy.com/api/',
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin' : 'http://localhost:3000',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  }
})

export default Api
