import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RIMES Frontend Assignment';
  tabs: any[] = [
    {
      tabLabel: 'tab 1',
      tabName: 'posts',
      tablcolor: '',
      tabComponent: '<app-posts/>',
    },
    {
      tabLabel: 'tab 2',
      tabName: 'post-add',
      tablcolor: '',
      tabComponent: '<app-post-add/>',
    },
    {
      tabLabel: 'tab 3',
      tabName: 'post-detail',
      tablcolor: '',
      tabComponent: '<app-post-detail/>',
    },
  ];
}
