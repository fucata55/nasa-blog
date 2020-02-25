import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nasa-blog';

  handleDateChange($event: MatDatepickerInputEvent<any>) {
    console.log($event)
  }
}
