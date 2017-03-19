import { MessagesService } from './../../services/messages.service';
import { AuthService } from './../../services/auth.service';
import { Message } from './../../models';
import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router'
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message: Message;
 

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
  
  ngOnInit() {
  }
  

}
