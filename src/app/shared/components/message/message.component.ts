import { Component, OnInit, Input } from '@angular/core'; 

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.sass']
})
export class MessageComponent implements OnInit {

  @Input() message: string;
  @Input() messageType: string;

  constructor() { }

  ngOnInit(): void {
  }
}
