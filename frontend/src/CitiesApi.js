import axios from 'axios'
import configData from "./config.json";
const API_URL = configData.SERVER_URL + '/api/v1/lib/issue_city/';

export default class CityManager {

  getCities(){
    return axios.get(API_URL).then(response => response.data);
  }
  getCity(city){
    const url = API_URL + city + '/';
    return axios.get(url).then(response => response.data);
  }
  createCity(city){
    return axios.post(API_URL,city)
  }
  updateCity(city){
    const url = API_URL + city.pk +'/';
    return axios.patch(url,city)
  }
  deleteCity(city){
    const url = API_URL + city + '/';
    return axios.delete(url)
  }
}
