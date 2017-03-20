import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { SearchService } from "./../services/search.service";
import { Observable } from "rxjs";
import { Router} from '@angular/router'
import { MessagesService } from './../services/messages.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  word:string = "";
  input:string = "";
  
//mailboxes:Observable<any>;
  constructor(private _search: SearchService,
              private _el: ElementRef,
              private router:Router,
              private messagesService:MessagesService) { 

   
  Observable.fromEvent(this._el.nativeElement, 'keyup')
           .map((e: any) => { return e.target.value}) 
           .filter((text: string) => text.length > 0) 
           .debounceTime(500)                         
          // .do(() =)
           .subscribe((e) => this.word=e);   
//   this.mailboxes = _search.mailboxes;         
  }

  onSearch(event) {
    this.router.navigate(['/search', event || this.word]);
    this.input ="";
  }
   
  ngOnInit() {

  }

  ngOnDestroy(){
    this.input ="";
  }

}
