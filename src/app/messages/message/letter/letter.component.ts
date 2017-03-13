import { Component, OnInit } from '@angular/core';
import {MessagesService} from  '../../../services/messages.service';
import {ActivatedRoute} from "@angular/router";
import { Message } from './../../../models';
@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit {
  public letter:Message;
  public currentLetter;
  constructor(private messagesService: MessagesService,
              private route: ActivatedRoute) {

    this.route.params.pluck('id')
                     .subscribe((e)=> { return this.currentLetter = e  });

    messagesService.messages
                      .map((messages) => { return messages.filter((message)=>{ 
                      return message.id  === this.currentLetter })[0]})
                      .subscribe((e)=>this.letter = e )
                      console.log(this.letter)
  }
  ngOnInit() {}

}

