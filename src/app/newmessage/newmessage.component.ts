import { MessagesService } from './../services/messages.service';
import { Component, OnInit } from '@angular/core';
import { UsersService } from './../services/users.service';
import { Message,User } from './../models';
@Component({
  selector: 'app-newmessage',
  templateUrl: './newmessage.component.html',
  styleUrls: ['./newmessage.component.css']
})
export class NewmessageComponent implements OnInit {
public  me: User      = new User('Juliet@mail.ru','Julia','Lux');
currentmessage:Message = new Message();
  constructor(private usersService: UsersService,
              private messagesService: MessagesService) {
   
  }
  sendmessage(event: any): void {
  //  this.usersService.users.subscribe((e)=> e.filter((e)=>{return e.email !== "d"}) );
    this.sendMessage();
    event.preventDefault();
   
  }

  sendMessage(): void {
    let message: Message = new Message() ;
    message.sentAt = new Date();
    message.isRead = false;
    message.author = this.me;
    message.title = this.currentmessage.title ;
    message.text= this.currentmessage.text;
    message.sendTo = new User('Julidet@mail.ru','Julia','Lux'); 
    this.messagesService.addMessage(message);
    this.currentmessage = new Message();
  }

  ngOnInit() {
  }

}
