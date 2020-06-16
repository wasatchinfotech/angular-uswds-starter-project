import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { BaseCardComponent } from '../shared/components/base-card/base-card.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements AfterViewInit {
  @ViewChild(BaseCardComponent)
  private baseCardComponent: BaseCardComponent;
  constructor() { }

  ngAfterViewInit(): void {
    console.log('Access base uswds card component here');
  }

  toggleCard(){
    this.baseCardComponent.toggleCard();
  }

}
