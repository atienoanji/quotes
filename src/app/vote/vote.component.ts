import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from './quote';

@Component({
 selector: 'app-vote',
 templateUrl: './vote.component.html',
 styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

 @Output() isComplete = new EventEmitter<boolean>();

 quotes= [
   new Quote(1,'Dr Phil','Sometimes you just got to give yourself what you wish someone else would give you.',),
   new Quote(2,'Richard B. Sheridan', 'The surest way not to fail is to determine to succeed.'),
 ];

 upvotes = 0;
 downvotes = 0;

 upVote(){
   this.upvotes = this.upvotes + 1;
 }

 downVote(){
   this.downvotes = this.downvotes + 1;
 }


 constructor() { }

 ngOnInit() {
 }

}
