import { AuthService } from './../../services/auth.service';
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
  @Input() invisible: boolean;
  public isUnRead:boolean;
  public currentUnRead:number;
  
  constructor(private router:Router, private authService:AuthService) {  


   }

   onSelect(mailbox: MailBox ) {
       this.router.navigate(['/mailbox'], {queryParams: {'mailbox': mailbox.id}});
  }
  ngOnInit() {
  }
  ngDoCheck(){ this.isUnRead =  this.mailbox.messageslist.filter((e)=>e.sendTo.email == localStorage.getItem("currentuser")).some((e)=> { {return e.isRead === false}});
               this.currentUnRead =  this.mailbox.messageslist.filter((e)=>e.sendTo.email == localStorage.getItem("currentuser")).filter((e)=> { {return e.isRead === false}}).length;
              console.log(this.isUnRead);}

}
