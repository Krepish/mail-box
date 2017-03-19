import { MessagesService } from './../services/messages.service';
import { Component, OnInit, ElementRef } from '@angular/core';
import { UsersService } from './../services/users.service';
import { AuthService } from  "../services/auth.service";
import { Message,User } from './../models';
import { Router} from '@angular/router';
import * as _ from "underscore";

@Component({
  selector: 'app-newmessage',
  templateUrl: './newmessage.component.html',
  styleUrls: ['./newmessage.component.css']
})
export class NewmessageComponent implements OnInit {

currentMessage:Message = new Message();
currentEmail:string = "";
public usersEmails = [];
public filteredList = [];
public elementRef;
public messageAdd: boolean = false;
public messageToMe: boolean = false;

constructor(private usersService: UsersService,
            private messagesService: MessagesService,
            private myElement: ElementRef,
            private router:Router,
            private authService: AuthService) {
              this.usersService.users.subscribe((users)=> {
              this.usersEmails =  users.map((e)=>{return e.email})
            });
}

public filter() {
    if (this.currentEmail !== ""){
        this.filteredList = this.usersEmails.filter(function(el){
            return el.toLowerCase().indexOf(this.currentEmail.toLowerCase()) > -1;
        }.bind(this));
    }else{
        this.filteredList = [];
    }
}

public select(item){
    this.currentEmail = item;
    this.filteredList = [];
}
   
  onSendMessage(event: any): void {
    if( this.currentEmail === this.authService.currentUser.email) {
        this.messageToMe = true;
        setTimeout(function() { this.messageToMe = false; }.bind(this), 1500);        
        return;
    }
    if(this.currentMessage.title=="" || this.currentMessage.title== null) {
        this.currentMessage.title = "Без названия";
   }
    console.log(this.currentEmail);
    this.usersService.users.subscribe((e)=> this.currentMessage.sendTo = 
          e.filter((e)=>{return e.email === this.currentEmail})[0] || 
          new User(this.currentEmail,this.currentEmail)) ;
    
    this.addNewUser();
    this.sendMessage();
    
    event.preventDefault();
  }

  sendMessage(): void {
    let message: Message = new Message() ;
    message.sentAt = new Date();
    message.isRead = false;
    message.author = this.authService.currentUser;
    message.title = this.currentMessage.title ;
    message.text= this.currentMessage.text;
    message.sendTo = this.currentMessage.sendTo;
    this.messagesService.addMessage(message);
    this.currentMessage = new Message();
    this.messageAdd = true ;
    setTimeout(function() { this.messageAdd = false; }.bind(this), 1500);
  }

  private addNewUser(){
  let users;
  this.usersService.users.subscribe( e => {users = e;debugger });
  let m = _.indexOf(_.pluck( users, 'email'), this.currentMessage.sendTo.email);
    if(m<0){
      this.usersService.addUser(this.currentMessage.sendTo);
    }
  }

  ngOnInit() {
  }

}
