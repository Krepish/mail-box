import { Component, OnInit } from '@angular/core';
import {MessagesService} from  '../../../services/messages.service';
import {ActivatedRoute} from "@angular/router";
import { Message } from './../../../models';
import {Subscription} from 'rxjs/Subscription';
import {Location} from '@angular/common';
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
              private route: ActivatedRoute,
               private location: Location) {

    this.currentLetterSubscription = this.route.params.pluck('id')
                     .subscribe((e)=> { return this.currentLetter = e  });

    messagesService.messages
                      .map((messages) => {return messages.filter((message)=>{ 
                      return message.id  === this.currentLetter })[0]})
                      .subscribe((e)=>{console.log(e); this.letter=e})
  
    }

    back(): void {
    this.location.back();
  }
  ngOnInit() {}
  ngOnDestroy(){
   // this.letterSubscription.unsubscribe();
    this.currentLetterSubscription.unsubscribe();

  }

}

