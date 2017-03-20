import { Message } from './../models';
import { AuthService } from './../services/auth.service';
import {Location} from '@angular/common';

import { MailBox } from '../models';
import {Subscription} from 'rxjs/Subscription';
import { MailboxService } from './../services/mailbox.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, Router} from "@angular/router";
import {MessagesService} from  './../services/messages.service';
import "rxjs/add/operator/pluck";
import "rxjs/add/operator/filter";
import * as _ from 'underscore';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit, OnDestroy {
  public messages;
  private querySubscription: Subscription;
  private messagesSubscription;
  private currentmailbox;
  public invisible:boolean;
  public deleteArray = [];
  constructor(private messagesService: MessagesService,
              private route: ActivatedRoute,
              private router:Router,
              private authService:AuthService,
               private location: Location) {

              
console.log("messages component run")
  this.querySubscription = route.queryParams.subscribe(
    (queryParam: any) => { 
        if ( queryParam['mailbox']){
                this.currentmailbox = queryParam['mailbox'];}
                else {this.router.navigate([''])}
            
     } );

  // this.route.params.pluck('id')
  //                  .subscribe((e)=> { return  this.currentmailbox = e});
 
  console.log(this.currentmailbox);
    
  this.messagesSubscription = messagesService.orderedMessages 
    .map((messages)=>{  return messages.filter((message)=>{ 
        return message.sendTo.email  === this.currentmailbox || 
        message.author.email  === this.currentmailbox });
    })
    .subscribe((e)=>{console.log(e); if ( e.length>0){this.messages = e;}
                      else {this.router.navigate([''])}});

 //this.mailboxService.mailboxes.subscribe((e)=> this.messages = e[this.currentmailbox].messageslist);
 
              }
         public showUnread(){
    this.invisible = true;
  }
  public showAll(){
    this.invisible = false;
  }                                 
                  
   // Используется для чекбоксов
  createArray(message){
    if(~(this.deleteArray.indexOf(message))){
      this.deleteArray = _.without(this.deleteArray, message);
      console.log(this.deleteArray);
    } else {
      this.deleteArray.push(message);
      console.log(this.deleteArray);
    }   
  }    
  private deleteMessage(): void {
    this.deleteArray.map( (message) =>{ return  this.messagesService.deleteMessage(message) });
  //this.usersService.deleteUser(this.deleteArray);
  }
    back(): void {
    this.location.back();
  }   
               
  ngOnInit() {

  }
  
  ngOnDestroy(){
   this.querySubscription.unsubscribe();
    this.messagesSubscription.unsubscribe();
  }

}
