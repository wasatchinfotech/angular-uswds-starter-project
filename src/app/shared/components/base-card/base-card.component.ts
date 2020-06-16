import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-base-card',
  templateUrl: './base-card.component.html',
  styleUrls: ['./base-card.component.scss']
})
export class BaseCardComponent implements OnInit, OnDestroy {

  @Input() isHidden: boolean = false;

  constructor() { }

  ngOnInit(): void {
    // ON 
    console.log('Component Loaded');
  }

  ngOnDestroy(): void {
    // ON 
    console.log('Component Destroyed');
  }

  toggleCard() {
    this.isHidden = !this.isHidden;
  }

}
