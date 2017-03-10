import { UsersService } from './../services/users.service';
import { User } from './../models';
import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable"

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  users: Observable<any>;
  form:boolean = false;
  currentUser:User = new User();
  constructor(private usersService: UsersService) {
    this.users = usersService.users;
     console.log(this.users)
  }
addForm(){
  this.form=true;
}
addUser(event: any): void {
    this.sendUser();
    event.preventDefault();
  }

  sendUser(): void {
    let m: User;
    m.email = this.currentUser.email;
    m.name = this.currentUser.name;
    m.surname = this.currentUser.surname;
    this.usersService.addUser(m);
    this.currentUser = new User();
  }
  ngOnInit() {
  }

}
