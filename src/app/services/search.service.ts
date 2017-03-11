import { Injectable } from '@angular/core';
import { Message } from './../models';
import { MailBox } from '../models';
import { MailboxService } from './../services/mailbox.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from "@angular/router";
import {MessagesService} from  './../services/messages.service';
import "rxjs/add/operator/pluck";
import "rxjs/add/operator/filter";
import * as _ from 'underscore';
@Injectable()
export class SearchService {

//public messages:Message[];
  currentword:string;
  mailboxes:Observable<any>;
  constructor(private messagesService: MessagesService,
              private route: ActivatedRoute) {
 // this.route.params.subscribe((e)=> console.log(e));
              }
}
  // this.route.params.pluck('id')
  //                  .subscribe((e)=> { return  this.currentmailbox = e});
  // messagesService.messages
                 
  //                .subscribe((e)=>{ return this.messages = e}); 
// this.mailboxes =
//  messagesService.messages
//       .map((messages)=>{
//         return messages.filter((message)=>{ debugger;
//                return message.text === this.currentword;
//                         })
//         })
//       .map( (messages: Message[]) => {
//         let mailboxes: {[key: string]: MailBox} = {};
//         // Store the message's thread in our accumulator `threads`
//         messages.map((message: Message) => {
//           mailboxes[message.mailbox.id] = mailboxes[message.mailbox.id] ||
//             message.mailbox;
//              // debugger;
//           // Cache the most recent message for each thread
//           // let messagesBox: MailBox = mailboxes[message.mailbox.id];
//           // if (!messagesBox.lastMessage ||
//           //     messagesBox.lastMessage.sentAt < message.sentAt) {
//           //     messagesBox.lastMessage = message;
//           // }
//         });

//       });

//               }}