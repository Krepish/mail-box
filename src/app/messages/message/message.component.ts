import { Message } from './../../models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message: Message;

  constructor() {
   // console.log(this.message)
  }
  onSelect(message: Message ) {
    this.message.isRead =true;
  }
   ngOnInit() {
  }
  

}
