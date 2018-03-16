import { Component, OnInit } from '@angular/core';
import {Quotes} from './quote'
@Component({
 selector: 'app-quote',
 templateUrl: './quote.component.html',
 styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 quotes= [
   new Quote(1,'Dr Phil','Sometimes you just got to give yourself what you wish someone else would give you.',),
   new Quote(2,'Richard B. Sheridan', 'The surest way not to fail is to determine to succeed.'),
 ];

 toogleDetails(index){
   this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
 }
 deleteQuote(isComplete,index){
  if (isComplete){
    let toDelete=confirm(`Are you sure you want to delete ${this.goals[index].name}`)
           this.goals.splice(index,1);
      }
      }

 addNewQuote(quote){
   let quoteLength = this.quotes.length;
   quote.id=quoteLength+1;
   this.quotes.push(quote)
 }
 constructor() { }

 ngOnInit() {
 }

}
