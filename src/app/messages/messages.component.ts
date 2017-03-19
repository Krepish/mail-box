import { Message } from './../models';
import { AuthService } from './../services/auth.service';

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

  constructor(private messagesService: MessagesService,
              private route: ActivatedRoute,
              private router:Router,
              private authService:AuthService) {
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
                                         
                  
            
               
  ngOnInit() {

  }
  
  ngOnDestroy(){
   this.querySubscription.unsubscribe();
    this.messagesSubscription.unsubscribe();
  }

}
