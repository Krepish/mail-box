import { Injectable } from '@angular/core';
import { Message } from '../models';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {initialMessages} from '../Data';
import  "rxjs/add/operator/scan"
import  "rxjs/add/operator/publishReplay"
@Injectable()
export class MessagesService {
 
  messages: Observable<Message[]>;

  newMessages: Subject<Message> = new Subject<Message>();

  constructor() { 
     this.newMessages.subscribe((e)=> console.log(e));

    this.messages = this.newMessages
      .scan((messages: Message[],
             newMessage) => {
              
               return  messages.concat(newMessage);
             },
            initialMessages)
      .publishReplay(1)
      .refCount();
       this.messages.subscribe();
  }
  addMessage(message:Message){
   
    this.newMessages.next(message);

  }
   
}
