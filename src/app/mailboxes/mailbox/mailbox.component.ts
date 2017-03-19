import { MailBox } from '../../models';
import { Component, OnInit,Input } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit {
  @Input() mailbox: MailBox;

  constructor(private router:Router) { }

   onSelect(mailbox: MailBox ) {
       this.router.navigate(['/mailbox'], {queryParams: {'mailbox': mailbox.id}});
  }
  ngOnInit() {
  }

}
