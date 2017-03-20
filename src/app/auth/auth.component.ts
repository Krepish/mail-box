import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from  "../services/auth.service";
import { UsersService } from  "../services/users.service";
import { User } from '../models';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
 public infoMessage: string ;
 model: any = {};
 list:User[];
 public showList:false;
constructor(private authService: AuthService,
            private router:Router,
           private usersService:UsersService
            ) { 

      if(this.authService.isLoggedIn()){
        this.infoMessage = "Вы авторизованы"
      } else {
        this.infoMessage = "Введите данные"
      }
}

  public login(){
    if(this.authService.login(this.model.email, this.model.password)){
      this.infoMessage = "Вы получили доступ";
      this.router.navigate(['']);
    
    } else {
      this.infoMessage = "Неверные данные"
    }
    return false;
  }

  public logOut(): boolean{
    this.authService.isLoggedOut();
   // this.infoMessage = "Вы вышли";
    // setTimeout(function(){
    //   this.infoMessage = "Введите данные";
    // }.bind(this),2500);
    return false;
  }

  ngOnInit() {
     this.authService.isLoggedOut();
  }
   ngDoCheck(){ this.usersService.users.subscribe(users=>this.list =users);
   console.log(this.list)}

}



 

 

