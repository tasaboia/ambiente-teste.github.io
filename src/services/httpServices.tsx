import axios from "axios"
import { storage } from "../storage/storage"

export const http = axios.create({
  baseURL: 'https://api.importacoletiva.com.br/',
  headers: {'Content-Type': 'application/json; charset=utf-8'},

  timeout: 30000
}); 

interface Itoke {
  token: string | null;
} 
http.interceptors.request.use(
  function(config) {
    if (!!storage.getToken()) {
      const token: Itoke = JSON.parse(storage.getToken() || '{}');
      config.headers!.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
