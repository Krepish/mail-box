import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { MailboxesComponent } from './mailboxes/mailboxes.component'
import { MailboxComponent } from './mailboxes/mailbox/mailbox.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageComponent } from './messages/message/message.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactComponent } from './contacts/contact/contact.component';
import { NewmessageComponent } from './newmessage/newmessage.component';
import { InboxComponent } from './inbox/inbox.component';
import { SearchComponent } from './search/search.component';
import { SearchresultComponent } from './search/searchresult/searchresult.component';

import { MessagesService } from './services/messages.service'
import { MailboxService } from './services/mailbox.service';
import { UsersService } from './services/users.service';
import { SearchService } from './services/search.service';



const routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full'},
  { path: '', component: MailboxesComponent},
  { path: 'newmessage', component: NewmessageComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'search/:word', component: MailboxesComponent},
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
    MessageComponent,
    InboxComponent,
    NewmessageComponent,
    ContactsComponent,
    ContactComponent,
    SearchComponent,
    SearchresultComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MessagesService, MailboxService, UsersService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
