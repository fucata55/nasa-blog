import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { NasaService } from './nasa.service';
import { Photo } from './photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nasa-blog';
  public photos: Photo[] = []
  constructor(private _nasaService: NasaService) { }

  handleDateChange(datePickerInput: MatDatepickerInputEvent<any>) {
    this.photos = []
    this._nasaService.getPhotos(datePickerInput.value).subscribe(photos => {
      this.photos = photos
    })

  }
}
