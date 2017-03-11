import { MessagesService } from './messages.service';
import { MailBox, Message } from './../models';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import "rxjs/add/operator/map"
import * as _ from 'underscore';

@Injectable()
export class MailboxService {
    // `threads` is a observable that contains the most up to date list of threads
  mailboxes: Observable<{ [key: string]: MailBox }>;

  // `orderedThreads` contains a newest-first chronological list of threads
  orderedMailboxes: Observable<MailBox[]>;

  // `currentThread` contains the currently selected thread
  

  // `currentThreadMessages` contains the set of messages for the currently
  // selected thread
  shortCurrentMailboxMessages: Observable<Message[]>;
  currentMailboxMessages: Observable<Message[]>;

  constructor(messagesService:MessagesService) {
    // messagesService.messages
    //              .map((messages)=>{
    //                return messages.filter((message)=>{ 
    //                  return message.mailbox.id === this.currentmailbox 
    //                })
    //               })
    //              .subscribe((e)=>{ return this.messages = e});  
    this.mailboxes = messagesService.messages
      .map( (messages: Message[]) => {
        let mailboxes:{}={};
      //   {[key: string]: MailBox} = {};
        // Store the message's thread in our accumulator `threads`
        messages.map((message: Message) => {
          
          // if(message.sendTo.email === 'Juliet@mail.ru') {
          //   name = message.author} else { name = message.sendTo}
          let name =( message.sendTo.email === 'Juliet@mail.ru' ) ?
                      message.author : message.sendTo;
                   
            mailboxes[name.email] = mailboxes[name.email] || new MailBox(name);
          // } else {
          //   mailboxes[message.author.email] = mailboxes[message.author.email] || 
          //                                 new MailBox(message.author);
          // }
          
            // debugger;
          // Cache the most recent message for each thread


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
      //    mailboxes[message.mailbox.id].messageslist = 
          
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
