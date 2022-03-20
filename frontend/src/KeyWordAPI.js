import axios from 'axios'
import configData from "./config.json";
const API_URL = configData.SERVER_URL + '/api/v1/lib/key_word/';

export default class KeyWordManager {

  getKeyWords(){
    return axios.get(API_URL).then(response => response.data);
  }
  getKeyWord(key_word){
    const url = API_URL + key_word + '/';
    return axios.get(url).then(response => response.data);
  }
  createKeyWord(key_word){
    return axios.post(API_URL,key_word)
  }
  updateKeyWord(key_word){
    const url = API_URL + key_word.pk +'/';
    return axios.patch(url,key_word)
  }
  deleteKeyWord(key_word){
    const url = API_URL + key_word + '/';
    return axios.delete(url)
  }
}
