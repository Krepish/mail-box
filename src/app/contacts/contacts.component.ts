import { Email } from './../../../../angular2-20170130-1930/homework/lesson2-directives/oleg.fadeyev/mail/src/app/common';
import { UsersService } from './../services/users.service';
import { User } from './../models';
import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable"
import * as _ from 'underscore';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  users;
  form:boolean = false;
  currentUser:User = new User();
  public deleteArray = [];
  message: boolean = false;
  messageAdd: boolean = false;
  constructor(private usersService: UsersService) {
  usersService.users.subscribe( e => this.users = e);
    //console.log(this.users)
  }
addForm(){
  this.form=true;
  return false;
}
cancel(){
  this.form=false;
  return false;
}
// Используется для чекбоксов
createArray(user){

 if(~(this.deleteArray.indexOf(user))){
  
   this.deleteArray = _.without(this.deleteArray, user);
   console.log(this.deleteArray);
 } else {
 
   this.deleteArray.push(user);
   console.log(this.deleteArray);
 }
    
}





addUser(event: any): void {
 //if(_.findLastIndex(this.users, {email: 'this.currentUser.email'})){debugger;console.log(6)};

 console.log(_.pluck(this.users, 'email'))
  console.log(this.currentUser.email);
 let m = _.indexOf(_.pluck(this.users, 'email'), this.currentUser.email)
if(m >0){ this.message = true ;setTimeout(function() {this.message = false;}.bind(this), 1500); return}
    this.form=false;
    this.createUser();
     console.log(_.pluck(this.users, 'email'))

  // if( === this.users.ma )
   
    event.preventDefault();
}

deleteUser(): void {
this.deleteArray.map( (email) =>{ return  this.usersService.deleteUser(email) });

 //this.usersService.deleteUser(this.deleteArray);
  }


  createUser(): void {
    let m: User = new User();
    m.email =  this.currentUser.email;
    m.name = this.currentUser.name;
    m.surname = this.currentUser.surname;
    this.usersService.addUser(m);
    this.currentUser = new User();
    this.messageAdd = true ;setTimeout(function() {this.messageAdd = false;}.bind(this), 1500);
  }
  ngOnInit() {
  }

}
