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
  users: Observable<any>;
  form:boolean = false;
  currentUser:User = new User();
  public deleteArray = [];
  constructor(private usersService: UsersService) {
    this.users = usersService.users;
     //console.log(this.users)
  }
addForm(){
  this.form=true;
  return false;
}

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
    this.createUser();
    this.form=false;
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
  }
  ngOnInit() {
  }

}
