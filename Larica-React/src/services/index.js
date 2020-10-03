import Axios from 'axios';

const Api = Axios.create({
  baseURL: 'http://www.recipepuppy.com/api/'
})

export default Api
