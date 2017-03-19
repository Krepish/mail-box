import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { UsersService } from './../services/users.service';
import { User } from './../models';
import * as _ from 'underscore';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  public users;
  public changingUser:User;
  public canChange:boolean = false;
  public showForm:boolean = false;
  public currentUser:User = new User();
  public deleteArray = [];
  public message: boolean = false;
  public messageAdd: boolean = false;
  public hasChanged: boolean = false;


  constructor(private usersService: UsersService) {
    usersService.users.subscribe( e => this.users = e);
    console.log(this.users);
  }

  addForm(){
    this.showForm = true;
    return false;
  }

  cancel(){
    this.showForm = false;
    this.canChange = false;
    
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
    console.log(_.pluck(this.users, 'email'));
    console.log(this.currentUser.email);
    let m = _.indexOf(_.pluck(this.users, 'email'), this.currentUser.email);
    if (m != -1){
      debugger
      this.message = true;
      setTimeout(function() {this.message = false;}.bind(this), 1500);
      return;
    }
    this.showForm = false;
    this.createUser();
    console.log(_.pluck(this.users, 'email'))
    event.preventDefault();
  }

  private deleteUser(): void {
    this.deleteArray.map( (email) =>{ return  this.usersService.deleteUser(email) });
  //this.usersService.deleteUser(this.deleteArray);
  }

  private createUser(): void {
      let m: User = new User();
      m.email =  this.currentUser.email;
      m.name = this.currentUser.name;
      m.surname = this.currentUser.surname;
      this.usersService.addUser(m);
      this.currentUser = new User();
      this.messageAdd = true;
      setTimeout(function() {this.messageAdd = false;}.bind(this), 1500);
  }

  public changeUserData(user){
    this.changingUser = user;
    this.canChange = true;
  }

  public changeUser(name, surname){
    this.usersService.changeUser(this.changingUser.email, name, surname);
    this.hasChanged = true;
    setTimeout(function() {
        this.canChange = false;
        this.hasChanged = false;}.bind(this), 1500);
  }

  ngOnInit() {
  }

}
