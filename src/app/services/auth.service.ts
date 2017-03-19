import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { MessagesService } from './messages.service';
import {UsersService} from  './../services/users.service';
import { User } from '../models';

@Injectable()
export class AuthService {
  public currentUser:User;

  constructor(private usersService: UsersService,private router:Router) { }

   public login(email: string, password: string){debugger;
     this.usersService.users.map((users)=>{return users.filter((user)=>user.email === email && user.password === password)})
                            .subscribe((e)=>this.currentUser=e[0])
    if(this.currentUser) {
      localStorage.setItem('currentuser', this.currentUser.email)
      return true;
    }
    return false;
  }

  public isLoggedIn():boolean{
    if(localStorage.getItem("currentuser")){debugger;
      this.usersService.users.map((users)=>{
        return users.filter((user)=>user.email === localStorage.getItem("currentuser"))})
                              .subscribe((e)=>{this.currentUser=e[0]});
          
               
    return true;
    }
    return false;
  }

  public isLoggedOut():boolean{
    debugger;
    localStorage.removeItem("currentuser");
    this.router.navigate(['auth']);
    return false;
  }

}