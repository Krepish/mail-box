import { Component, OnInit, Input } from '@angular/core';
import { MailBox } from '../../models';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message: MailBox;

  constructor() {
   // console.log(this.message)
   }
   ngOnInit() {
  }
  

}
