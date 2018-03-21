import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes'
@Component({
 selector: 'app-quote',
 templateUrl: './quote.component.html',
 styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 quotes= [
   new Quotes(1,'Dr Phil','Sometimes you just got to give yourself what you wish someone else would give you.',),
   new Quotes(2,'Richard B. Sheridan', 'The surest way not to fail is to determine to succeed.'),
 ];

 toogleDetails(index){
   this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
 }
 deleteQuote(isComplete,index){
  if (isComplete){
    let toDelete=confirm(`Are you sure you want to delete this quote: ${this.quotes[index].name}`)
        this.quotes.splice(index,1);
      this.quotes.splice(index,1);
      }
      }

 addNewQuotes(quote){
   let quoteLength = this.quotes.length;
   quote.id=quoteLength+1;
   this.quotes.push(quote)
 }
 constructor() { }

 ngOnInit() {
 }

}
