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
       this.function.next((foo:any) => {return foo.concat(message) });
  }
  isRead(message:Message){
    this.function.next(
      (foo:any) => {return foo.map( (e) => {if (e.id === message.id) {e.isRead = true};return e})}
    )
  }
  search(e){
     this.function.next((foo:any) => {return this.filterMessages(foo, e) });
    }

  filterMessages(messages: Message[], substr:string):Message[]{
    let lowerSubstr = substr.toLowerCase();
   
    function searchSubsr(message: Message){
       let letter = message.text.toLowerCase();
       if(~letter.indexOf(lowerSubstr)){
        return true;
       }
       
    }
    return messages.filter(searchSubsr);
  }

  // transform(letters, substr: string): any {
  //   let lowerSubstr = substr.toLowerCase();
  
  //   console.log(lowerSubstr);
    
  //   function searchSubsr(letter){
  //     if(~letter["sender"].toLowerCase().indexOf(lowerSubstr)){
  //       return true;
  //     }
  //   }

  //   return letters.filter(searchSubsr);
  // }
}