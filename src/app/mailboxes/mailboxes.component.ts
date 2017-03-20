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
  public invisible:boolean;

  constructor(private mailboxService: MailboxService) {
      this.mailboxes = mailboxService.orderedMailboxes;
  }
  public showUnread(){
    this.invisible = true;
  }
  public showAll(){
    this.invisible = false;
  }
  ngOnInit() {
  }

}
