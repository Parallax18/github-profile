// provider.js

import axios from 'axios'; 
import { handleResponse, handleError } from './response'; 

// Define your api url from any source.
// Pulling from your .env file when on the server or from localhost when locally
const BASE_URL = 'https://api.github.com/users'; 

/** @param {string} resource */ 
const get = async (resource : string) => { 
  try {
    const resp = await   axios.get(`${BASE_URL}/${resource}`) 
      handleResponse(resp)
  } catch (error) {
    handleError(error)
  }
}; 

const getRepositories = async (resource : string) => { 
  try {
    const resp = await   axios.get(`${BASE_URL}/${resource}/repos`) 
      handleResponse(resp)
  } catch (error) {
    handleError(error)
  }
}; 

/** @param {string} resource */ 
/** @param {object} model */ 
const post = async (resource :string , model: any) => { 
try {
    const resp = await  axios 
  .post(`${BASE_URL}/${resource}`, model)  
  handleResponse(resp)
} catch (error) {
  handleError(error)
}
}


export const apiProvider = { 
  get, 
  post,
  getRepositories
};