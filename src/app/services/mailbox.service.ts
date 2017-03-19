import { AuthService } from './auth.service';
import { MessagesService } from './messages.service';
import { MailBox, Message } from './../models';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import "rxjs/add/operator/map"
import "rxjs/add/operator/filter"
import * as _ from 'underscore';

@Injectable()
export class MailboxService {
    
  mailboxes: Observable<{ [key: string]: MailBox }>;
  orderedMailboxes: Observable<MailBox[]>;

  constructor(private messagesService:MessagesService,
              private authService:AuthService) {
     
  this.mailboxes = messagesService.messages
  .map( (messages: Message[]) => {
        let mailboxes:{}={};

        messages.map((message: Message) => {
          let name =( message.sendTo.email === this.authService.currentUser.email ) ?
                      message.author : message.sendTo;
        mailboxes[name.email] = mailboxes[name.email] || new MailBox(name);

        messagesService.messages
                 .map((inmessages)=>{
                   return inmessages.filter((inmessage)=>{ 
                     return (mailboxes[name.email].id === inmessage.sendTo.email ||
                              mailboxes[name.email].id === inmessage.author.email);
                   })
                  })
                .subscribe((e)=>{ return mailboxes[name.email].messageslist = e});    

          let messagesBox: MailBox = mailboxes[name.email];
          if (!messagesBox.lastMessage ||
              messagesBox.lastMessage.sentAt < message.sentAt) {
              messagesBox.lastMessage = message;
          }
        });
          
        console.log(mailboxes);
        return mailboxes;
      
    });
     
    this.orderedMailboxes = this.mailboxes
      .map((mailboxes: { [key: string]: MailBox}) => {
        let mailboxesarray: MailBox[] = _.values(mailboxes);
          return _.sortBy(mailboxesarray, (mailbox: MailBox) => mailbox.lastMessage.sentAt).reverse();
    });
  

   }
}
