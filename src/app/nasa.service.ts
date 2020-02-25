import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  public readonly url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos'
  public readonly apiKey = '3wvRpXf5iXtSTezUBh3H0zJVQtXUX9cdvsbrdnyl'
  constructor(private _http: HttpClient) { }

  getPhotos(date: Date): Observable<object> {
    let params = {
      earth_date: '2015-6-3',
      api_key: this.apiKey
    }
    return this._http.get(this.url, { params })
  }
}
