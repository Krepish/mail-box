import { MailboxService } from './../services/mailbox.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit {
   mailboxes: Observable<any>;

  constructor(private mailboxService: MailboxService) {
    this.mailboxes = mailboxService.orderedMailboxes;
  }
  ngOnInit() {
  }

}
