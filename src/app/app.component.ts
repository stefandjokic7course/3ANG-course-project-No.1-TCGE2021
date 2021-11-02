import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-project-No1';
  featureSelected: string = 'recipe';

  onNavigate(feature: string) {
    console.log(feature);
    this.featureSelected = feature;
  }
}
