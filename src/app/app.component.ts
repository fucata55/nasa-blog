import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nasa-blog';

  constructor(private _nasaService: NasaService) { }

  handleDateChange($event: MatDatepickerInputEvent<any>) {
    console.log($event)
    this._nasaService.getPhotos(new Date()).subscribe(res => {
      console.log(res)
    })

  }
}
