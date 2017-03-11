import { MailboxService } from './../services/mailbox.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable"

@Component({
  selector: 'app-mailboxes',
  templateUrl: './mailboxes.component.html',
  styleUrls: ['./mailboxes.component.css']
})
export class MailboxesComponent implements OnInit {
      mailboxes: Observable<any>;

  constructor(private mailboxService: MailboxService) {
   this.mailboxes = mailboxService.orderedMailboxes;
  }
 

  ngOnInit() {
  }

}
