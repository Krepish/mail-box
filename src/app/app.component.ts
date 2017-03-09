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
  constructor( messagesService:MessagesService) { 
      initialMessages.map( (message: Message) =>{ return  messagesService.addMessage(message) });
   messagesService.messages.subscribe(() => ({}));
  }


}
