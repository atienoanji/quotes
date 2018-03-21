import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Quotes} from '../quotes'

@Component({
 selector: 'app-vote',
 templateUrl: './vote.component.html',
 styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

 @Output() isComplete = new EventEmitter<boolean>();

 quotes= [
   new Quotes(1,'Dr Phil','Sometimes you just got to give yourself what you wish someone else would give you.',),
   new Quotes(2,'Richard B. Sheridan', 'The surest way not to fail is to determine to succeed.'),
 ];

 upvotes = 0;
 downvotes = 0;

 uvotes = 0;
  dvotes = 0;

  upVote(){
    this.uvotes = this.uvotes + 1;
  }

  downVote(){
    this.dvotes = this.dvotes + 1;
  }

 constructor() { }

 ngOnInit() {
 }

}
