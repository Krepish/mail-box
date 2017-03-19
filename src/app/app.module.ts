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
import { LetterComponent } from './messages/message/letter/letter.component';
import { AuthComponent } from './auth/auth.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';
import { ModalComponent } from './user/modal/modal.component';

import { MessagesService } from './services/messages.service'
import { MailboxService } from './services/mailbox.service';
import { UsersService } from './services/users.service';
import { SearchService } from './services/search.service';
import { AuthService } from './services/auth.service';
import { SearchPipe } from './pipes/search.pipe';
import { AuthGuard } from './guards/authguard';


const userRoutes = [
  { path: '', component: MailboxesComponent},
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'newmessage', component: NewmessageComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'search/:word', component: SearchresultComponent},
  { path: 'mailbox', component: MessagesComponent},
  { path: 'letter/:id', component: LetterComponent},
  { path: "**", redirectTo: '/'}  
];

const routes = [
 { path: 'auth', component: AuthComponent}, 
 {path: '', component: UserComponent, children: userRoutes,  canActivate: [AuthGuard]},
 { path: "**", redirectTo: ''}  
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
    SearchresultComponent,
    SearchPipe,
    LetterComponent,
    PageNotFoundComponent,
    AuthComponent,
    UserComponent,
    ModalComponent,
    ModalComponent
     ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [MessagesService, MailboxService, UsersService, SearchService, AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
