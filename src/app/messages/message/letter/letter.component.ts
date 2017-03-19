import { Component, OnInit } from '@angular/core';
import {MessagesService} from  '../../../services/messages.service';
import {ActivatedRoute} from "@angular/router";
import { Message } from './../../../models';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit {
  public letter:Message;
  public currentLetter;
  private letterSubscription: Subscription;
  private currentLetterSubscription: Subscription;

  constructor(private messagesService: MessagesService,
              private route: ActivatedRoute) {

    this.currentLetterSubscription = this.route.params.pluck('id')
                     .subscribe((e)=> { return this.currentLetter = e  });

    messagesService.messages
                      .map((messages) => {debugger; return messages.filter((message)=>{ 
                      return message.id  === this.currentLetter })[0]})
                      .subscribe((e)=>{debugger;console.log(e); this.letter=e})
  
    }
  ngOnInit() {}
  ngOnDestroy(){
   // this.letterSubscription.unsubscribe();
    this.currentLetterSubscription.unsubscribe();

  }

}

