import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnimalGetInterface } from '../model/AnimalGet.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://jsonplaceholder.typicode.com/posts';

getAnimalService() {
  return this.http.get<AnimalGetInterface >(this.configUrl);
}
}
