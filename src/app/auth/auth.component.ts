import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from  "../services/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
 public infoMessage: string ;
 model: any = {};

constructor(private authService: AuthService,
            private router:Router) { 
   
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
      debugger;
    } else {
      this.infoMessage = "Неверные данные"
    }
    return false;
  }

  public logOut(): boolean{debugger;
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

}



 

 

