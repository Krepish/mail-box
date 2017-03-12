import { Injectable } from '@angular/core';
import { User } from '../models';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
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
    console.log(this.users)
  }

  addUser(user:User){
       this.function.next((foo:any) => { return  foo.concat(user) });
  }
 deleteUser(email){
       this.function.next((foo:any) => { return   foo.filter((e)=>{return e.email !== email}) });
  }

}
  
