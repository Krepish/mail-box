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
  currentMailbox: Subject<MailBox> = new BehaviorSubject<MailBox>(new MailBox());

  // `currentThreadMessages` contains the set of messages for the currently
  // selected thread
  shortCurrentMailboxMessages: Observable<Message[]>;
  currentMailboxMessages: Observable<Message[]>;

  constructor(messagesService:MessagesService) {
    
    this.mailboxes = messagesService.messages
      .map( (messages: Message[]) => {
        let mailboxes: {[key: string]: MailBox} = {};
        // Store the message's thread in our accumulator `threads`
        messages.map((message: Message) => {
          mailboxes[message.thread.id] = mailboxes[message.thread.id] ||
            message.thread;

          // Cache the most recent message for each thread
          let messagesBox: MailBox = mailboxes[message.thread.id];
          if (!messagesBox.lastMessage ||
              messagesBox.lastMessage.sentAt < message.sentAt) {
              messagesBox.lastMessage = message;
          }
        });
        return mailboxes;
      });

      this.orderedMailboxes = this.mailboxes
      .map((mailboxes: { [key: string]: MailBox}) => {
        let mailboxesarray: MailBox[] = _.values(mailboxes);
        return _.sortBy(mailboxesarray, (mailbox: MailBox) => mailbox.lastMessage.sentAt).reverse();
      });

   }

}
