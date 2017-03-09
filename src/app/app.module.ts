import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MailboxComponent } from './mailbox/mailbox.component';

import {MessagesService} from './services/messages.service'
import {MailboxService} from './services/mailbox.service'
@NgModule({
  declarations: [
    AppComponent,
    MailboxComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MessagesService, MailboxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
