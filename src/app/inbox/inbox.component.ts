import { Component, OnInit } from '@angular/core';
import {MessagesService} from "../services/messages.service";
import { AuthService } from './../services/auth.service';

import { Message } from './../models';
import * as _ from 'underscore';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  public inbox:number;
  constructor(private messagesService:MessagesService,
              private authService:AuthService) { }

 ngOnInit(): void {
    this.messagesService.messages.map(( messages:Message[]) => {
        this.inbox =_.reduce(messages,(sum: number, m: Message) => {
               if (!m.isRead  && (m.author.email !== this.authService.currentUser.email)) {
                sum = sum + 1;
              }
              return sum;
            },
            0);
      }).subscribe();
      console.log(this.inbox)

}
}