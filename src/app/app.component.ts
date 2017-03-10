import { Message } from './models';
import { MessagesService } from './services/messages.service';
import { Component } from '@angular/core';
import {initialMessages} from './Data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // title = "hh"
  constructor(private  messagesService:MessagesService) { 
      messagesService.messages.subscribe(e=>console.log(e));
      initialMessages.map( (message: Message) =>{ return  messagesService.addMessage(message) });
 
  }


}
