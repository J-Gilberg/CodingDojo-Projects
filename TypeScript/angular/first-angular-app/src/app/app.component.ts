import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any[] =[
    {title: 'Task', color: 'red'}
    ,{title: 'Time', color: 'blue'}
    ,{title: 'Something', color: 'green'}
  ];
  constructor(){}
}
