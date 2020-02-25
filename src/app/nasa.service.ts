import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPhoto, Photo } from './photo';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  public readonly url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos'
  public readonly apiKey = '3wvRpXf5iXtSTezUBh3H0zJVQtXUX9cdvsbrdnyl'
  constructor(private _http: HttpClient) { }

  getPhotos(date: Date): Observable<Photo[]> {
    let formattedDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
    let params = {
      earth_date: formattedDate,
      api_key: this.apiKey
    }
    return this._http.get<{ photos: [] } | null>(this.url, { params })
      .pipe(map(res => {
        let result = [];
        const photos = res?.photos
        if (Array.isArray(photos) && typeof (photos as Array<any>)[0].img_src === 'string') {
          result = photos.map(photo => new Photo(photo))
        }
        return result
      }))
  }
}
