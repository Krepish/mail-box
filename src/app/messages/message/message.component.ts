import { MessagesService } from './../../services/messages.service';
import { Message } from './../../models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message: Message;

  constructor(private messagesService:MessagesService) {
   //console.log(this.message.isRead)
  }
  onSelect(message: Message ) {
  this.message.isRead =true;
  this.messagesService.isRead(message);
  }
   ngOnInit() {
  }
  

}
