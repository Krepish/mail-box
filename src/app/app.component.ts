import { Message,User } from './models';
import { MessagesService } from './services/messages.service';
import { UsersService } from './services/users.service';
import { Component } from '@angular/core';
import {initialMessages} from './Data';
import {initialUsers} from './Data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private usersService:UsersService) {
      usersService.users.subscribe(e=>{console.log(e)});
      initialUsers.map( (user: User) =>{ return  usersService.addUser(user) });
  }
}
