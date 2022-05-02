// core.js

import { IAxios } from '../../model/axios';
import {apiProvider} from './provider';


export class ApiCore {
  constructor(options: IAxios) {
    if (options.get) {
      // @ts-ignore
      this.get = () => {
        return apiProvider.get(options.url);
      };
    }


    if (options.getRepositories) {
      // @ts-ignore
      this.getRepositories = () => {
        return apiProvider.getRepositories(options.url);
      };
    }
  

    if (options.post) {
      // @ts-ignore
      this.post = (model: any) => {
        return apiProvider.post(options.url, model);
      };
    }

  
  }
}