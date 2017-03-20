import { MessagesService } from './../../services/messages.service';
import { AuthService } from './../../services/auth.service';
import { Message } from './../../models';
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Router} from '@angular/router'
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message: Message;
   public isUnRead:boolean;
   @Input() invisible: boolean;
   @Output() onCheck: EventEmitter <any> = new EventEmitter();
  constructor(private messagesService:MessagesService,
              private authService:AuthService,
              private router:Router) {
 
              }
   
  onSelect(message: Message ) {
    if (this.message.author.email !== this.authService.currentUser.email) {
      this.message.isRead =true;
      this.messagesService.isRead(message);
    }
    this.router.navigate(['/letter/', message.id])
  }
   public check(e){
    this.onCheck.emit(this.message);
  };
  ngOnInit() {
  }
  
 ngDoCheck(){this.isUnRead =  this.message.isRead === false  && this.message.author.email !== this.authService.currentUser.email}
}
