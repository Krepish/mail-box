import { Injectable,Component, OnInit  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import { User } from '../models';
import {initialMessages} from '../Data';
import  "rxjs/add/operator/scan"
import  "rxjs/add/operator/publishReplay"
import * as _ from "underscore"

@Injectable()
export class UsersService {
  users: Observable<User[]>;
  function: Subject<Function> = new Subject<Function>();

  constructor() { 
    this.function.subscribe();
    this.users = this.function
      .scan((users: User[],operator: Function) =>{return operator(users)},[])
      
      .publishReplay(1)
      .refCount();
  }
  initial(){
       this.function.next((foo:any) => {return foo });
  }
  addUser(user:User){
       this.function.next((foo:any) => { return  foo.concat(user) });
  }

  public changeUser(email, name, surname){
    
    this.function.next((foo:any) => { 
        return foo.map((e)=>{
        if(e.email === email){
          e.name = name;
          e.surname = surname;
          return e;
        } else {
          return e;
        }
      })
    });
  }

  deleteUser(email){
       this.function.next((foo:any) => { return   foo.filter((e)=>{return e.email !== email}) });
  }

}
  
