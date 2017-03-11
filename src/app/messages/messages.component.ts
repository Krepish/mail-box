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

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  public messages;
  currentmailbox;
  constructor(private mailboxService: MailboxService,
              private route: ActivatedRoute) {

  this.route.params.pluck('id')
                   .subscribe((e)=> { return  this.currentmailbox = e});
    console.log(this.currentmailbox);
  
  this.messages = mailboxService.mailboxes.map((mailboxes: { [key: string]: MailBox}) => {
 
       return  mailboxes[this.currentmailbox].messageslist;

  
      });                               
     // console.log(m);       
              }     
            
  //                
  ngOnInit() {}

}
