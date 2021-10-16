import axios from 'axios';
import store from '../../store';
import Config from 'react-native-config';
// import AsyncStorage from '@react-native-async-storage/async-storage';
const BASE_URL = Config.BASE_URL;

class QuelpAPIHelper {
  API_TIME_OUT = 60000;

  /* GET API Calls */
  async get(relativeUrl: any) {
    return new Promise((resolve, reject) => {
      const headers = {};
      const URL = `${BASE_URL}${relativeUrl}`;
      console.log('getURL =---->', URL);
      axios({
        method: 'get',
        url: URL,
        headers: headers,
        timeout: this.API_TIME_OUT,
      })
        .then(sucessRes => {
          console.log('data  from api', URL, sucessRes);
          console.log('data  time', new Date());
          resolve(sucessRes);
        })
        .catch(errorRes => {
          console.log('error res==>', errorRes.response);
          reject(errorRes);
        });
    });
  }
}

export const QuelpAPIService = new QuelpAPIHelper();
