import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { MailboxesComponent } from './mailboxes/mailboxes.component'
import { MailboxComponent } from './mailbox/mailbox.component';
import { MessagesComponent } from './messages/messages.component';

import {MessagesService} from './services/messages.service'
import {MailboxService} from './services/mailbox.service';
import { MessageComponent } from './message/message.component';


const routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full'},
  { path: '', component: MailboxesComponent},
  { path: ':id', component: MessagesComponent}
  //{ path: 'users/:userId', component: UserComponent,canActivate: [AuthGuard]},
//  { path: 'authorization', component: AuthComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MailboxesComponent,
    MailboxComponent,
    MessagesComponent,
    MessageComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MessagesService, MailboxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
