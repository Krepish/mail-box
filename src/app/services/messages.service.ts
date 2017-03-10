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
  function: Subject<Function> = new Subject<Function>();

  constructor() { 
    
    this.function.subscribe();
        this.messages = this.function
      .scan((messages: Message[],operator: Function) =>{return operator(messages)},[])
      .publishReplay(1)
      .refCount();
    
  }
  addMessage(message:Message){
   
    this.function.next((foo:any) => { return foo.concat(message) });
  }
   
}


//               function (messages) {
// 	                return messages.map(function (message) {
// 	                    if (message.thread.id === thread.id) {
// 	                        message.isRead = true;
// MessagesService.ts:29 