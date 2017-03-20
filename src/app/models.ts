import {uuid}  from "./uuid";

export class User {
  id: string;
  constructor( public email?:string,
               public name?: string,
               public surname?:string,
               public password?:string
                ) {
    this.id = uuid();
  }
}

export class MailBox {
  id: string;
  lastMessage: Message;
  messageslist:Message[]=[];
  constructor(public user: User) {
    this.id =  user.email;
   
  }
}

export class Message {
  id: string;
  sentAt: Date;
  isRead: boolean;
  author: User;
  text: string;
  title: string;
  sendTo: User;
  delete:string;

  constructor(obj?: any) {
    this.id              = obj && obj.id              || uuid();
    this.isRead          = obj && obj.isRead          || false;
    this.sentAt          = obj && obj.sentAt          || new Date();
    this.author          = obj && obj.author          || null;
    this.text            = obj && obj.text            || null;
    this.title           = obj && obj.title           || null;
    this.sendTo          = obj && obj.sendTo          || null;
    this.delete          = obj && obj.string          || null;
  }
}
