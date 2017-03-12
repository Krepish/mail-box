import { MailboxService } from './../services/mailbox.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable"
import {ActivatedRoute} from "@angular/router";
import "rxjs/add/operator/pluck";

@Component({
  selector: 'app-mailboxes',
  templateUrl: './mailboxes.component.html',
  styleUrls: ['./mailboxes.component.css']
})
export class MailboxesComponent implements OnInit {
  mailboxes: Observable<any>;
  public word;

  constructor(private mailboxService: MailboxService,
              private _route: ActivatedRoute) {
   this.mailboxes = mailboxService.orderedMailboxes;


  //  this._route.params.pluck('word')
  //                 .subscribe((e)=>{this.word=e});
                  
  }
 

  ngOnInit() {
  }

}
