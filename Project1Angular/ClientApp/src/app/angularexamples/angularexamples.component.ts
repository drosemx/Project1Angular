import { Component } from '@angular/core';

@Component({
  selector: 'app-angularexamples-component',
  templateUrl: './angularexamples.component.html'
})
export class AngularexamplesComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
}
