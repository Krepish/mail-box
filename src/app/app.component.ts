import { Message,User } from './models';
import { MessagesService } from './services/messages.service';
import { UsersService } from './services/users.service';
import { Component } from '@angular/core';
import {initialMessages} from './Data';
import {initialUsers} from './Data';
import { Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private  messagesService:MessagesService,
              private  usersService:UsersService,
              private router:Router) { 
      usersService.users.subscribe(e=>console.log(e));
      messagesService.messages.subscribe(e=>console.log(e));
      initialMessages.map( (message: Message) =>{ return  messagesService.addMessage(message) });
      initialUsers.map( (user: User) =>{ return  usersService.addUser(user) });
  }

   createMessage() {
    
   this.router.navigate(['/newmessage']);
  }
  addressbook() {
    this.router.navigate(['/contacts']);
  }
}
