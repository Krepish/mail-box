import { MessagesService } from './../../services/messages.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import "rxjs/add/operator/pluck";
@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {
  public word;
  public searchlist;
  constructor(private route: ActivatedRoute,
              private messagesService:MessagesService) {  
   this.route.params.pluck('word').subscribe(e => this.word = e );
    
  this.messagesService.messages.subscribe((e) => this.searchlist = e)
   console.log(this.word);
  }
 
//       .map((messages)=>{
//         return messages.filter((message)=>{ debugger;
//                return message.text === this.currentword;
//                         })
//         })
//       .map( (messages: Message[]) => {
//         let mailboxes: {[key: string]: MailBox} = {};
//         // Store the message's thread in our accumulator `threads`
//         messages.map((message: Message) => {
//           mailboxes[message.mailbox.id] = mailboxes[message.mailbox.id] ||
//             message.mailbox;
             // debugger;
          // Cache the most recent message for each thread
          // let messagesBox: MailBox = mailboxes[message.mailbox.id];
          // if (!messagesBox.lastMessage ||
          //     messagesBox.lastMessage.sentAt < message.sentAt) {
          //     messagesBox.lastMessage = message;
          // }
       // });

     // });
  ngOnInit() {
  }

}
