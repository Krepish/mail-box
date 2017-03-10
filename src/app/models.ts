import {uuid}  from "./uuid";

export class User {
  id: string;
  password:string;
  constructor( public email?:string,
               public name?: string,
               public surname?:string
                ) {
    this.id = uuid();
  }
}

export class MailBox {
  id: string;
  lastMessage: Message;
 

  constructor(public user: User) {
    this.id =  uuid();
   
  }
}

export class Message {
  id: string;
  sentAt: Date;
  isRead: boolean;
  author: User;
  text: string;
  name: string;
  mailbox: MailBox;

  constructor(obj?: any) {
    this.id              = obj && obj.id              || uuid();
    this.isRead          = obj && obj.isRead          || false;
    this.sentAt          = obj && obj.sentAt          || new Date();
    this.author          = obj && obj.author          || null;
    this.text            = obj && obj.text            || null;
    this.name            = obj && obj.text            || null;
    this.mailbox         = obj && obj.mailbox          || null;
  }
}
