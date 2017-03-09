import { MailBox } from './../models';
import { MailboxService } from './../services/mailbox.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from "@angular/router";
import {MessagesService} from  './../services/messages.service';
import "rxjs/add/operator/pluck";
import "rxjs/add/operator/filter";
import * as _ from 'underscore';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  public messages;
  currentmailbox;
  constructor(private messagesService: MessagesService,
              private route: ActivatedRoute) {

this.route.params.pluck('id').subscribe((e)=> {console.log(e); return  this.currentmailbox = e});
messagesService.messages.map((messages)=>{return messages.filter((message)=>{return message.mailbox.id === this.currentmailbox })})
.subscribe((e)=>{ return this.messages = e});                                        
    console.log(console.log(this.messages) );       
              }     
            
  //                
  ngOnInit() {}

}

