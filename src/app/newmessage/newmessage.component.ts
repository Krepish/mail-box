import { Component, OnInit } from '@angular/core';
import { MessagesService } from './../services/messages.service';
import { Message,User } from './../models';
@Component({
  selector: 'app-newmessage',
  templateUrl: './newmessage.component.html',
  styleUrls: ['./newmessage.component.css']
})
export class NewmessageComponent implements OnInit {
public  me: User      = new User('Juliet@mail.ru','Julia','Lux');
  sendmessage(event: any): void {
    this.sendMessage();
    event.preventDefault();
   
  }

  sendMessage(): void {
    let message: Message ;
   // message.sendAt = new Date();
    // message.isRead = true;
    // message.author = this.me;
    // message.name = ;
    // message.text= ;
    // message.mailbox = 
    // this.messagesService.addMessage(m);
    // this.draftMessage = new Message();
  }

  ngOnInit() {
  }

}
